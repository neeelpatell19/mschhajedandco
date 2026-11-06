"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";

const BlogTabs = ({ items }) => {
    const baseId = useId();
    const listRef = useRef(null);
    const [activeKey, setActiveKey] = useState(items[0].key);
    const [visitedKeys, setVisitedKeys] = useState(() => new Set([items[0].key]));
    const [inkBar, setInkBar] = useState(null);

    const activeIndex = items.findIndex((item) => item.key === activeKey);

    // The ink bar follows the active tab and keeps up when tab widths change
    // (e.g. once the web font has loaded).
    useLayoutEffect(() => {
        const tabs = Array.from(listRef.current.querySelectorAll('[role="tab"]'));

        const measure = () => {
            const { offsetLeft: left, offsetWidth: width } = tabs[activeIndex];
            setInkBar((current) =>
                current && current.left === left && current.width === width
                    ? current
                    : { left, width }
            );
        };

        measure();
        const observer = new ResizeObserver(measure);
        tabs.forEach((tab) => observer.observe(tab));
        return () => observer.disconnect();
    }, [activeIndex]);

    const selectTab = (key) => {
        setActiveKey(key);
        setVisitedKeys((current) => (current.has(key) ? current : new Set(current).add(key)));
    };

    const handleKeyDown = (event) => {
        const lastIndex = items.length - 1;
        let nextIndex;

        if (event.key === "ArrowRight") {
            nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        } else if (event.key === "ArrowLeft") {
            nextIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = lastIndex;
        } else {
            return;
        }

        event.preventDefault();
        selectTab(items[nextIndex].key);
        event.currentTarget.querySelectorAll('[role="tab"]')[nextIndex].focus();
    };

    return (
        <div className="BlogTabs">
            <div className="BlogTabsNav">
                <div ref={listRef} className="BlogTabsList" role="tablist" onKeyDown={handleKeyDown}>
                    {items.map((item) => {
                        const selected = item.key === activeKey;
                        return (
                            <button
                                key={item.key}
                                type="button"
                                role="tab"
                                id={`${baseId}-tab-${item.key}`}
                                className="BlogTab"
                                aria-selected={selected}
                                aria-controls={`${baseId}-panel-${item.key}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => selectTab(item.key)}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                    <span className="BlogTabsInkBar" style={inkBar ?? undefined} aria-hidden="true" />
                </div>
            </div>

            {items.map((item) => (
                <div
                    key={item.key}
                    id={`${baseId}-panel-${item.key}`}
                    role="tabpanel"
                    aria-labelledby={`${baseId}-tab-${item.key}`}
                    hidden={item.key !== activeKey}
                >
                    {visitedKeys.has(item.key) ? item.children : null}
                </div>
            ))}
        </div>
    );
};

export default BlogTabs;
