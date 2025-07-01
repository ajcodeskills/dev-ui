import React from "react";
import { useRanger, Ranger } from "@tanstack/react-ranger";
import { twMerge } from "tailwind-merge";
import Marker from "./Marker";

type TRangeSliderProps = {
  type?: "VALUE" | "PERCENTAGE";
  showMarkers?: boolean;
  showTicks?: boolean;
  className?: string;
  values?: number[];
  onChange?: (values: number[]) => void;
  onDrag?: (values: number[]) => void;
  segmentClassnameArray?: string[];
  sliderClassnameArray?: string[];
  min?: number;
  max?: number;
  stepSize?: number;
  constrained?: boolean;
  collidingThreshold?: number;
};

const RangeSlider: React.FC<TRangeSliderProps> = ({
  type = "PERCENTAGE",
  className,
  values = [],
  onChange,
  min = 0,
  max = 100,
  stepSize = 1,
  showMarkers = false,
  segmentClassnameArray = [],
  sliderClassnameArray = [],
  constrained = true,
  showTicks = false,
  onDrag,
  collidingThreshold = 2,
}) => {
  const rangerRef = React.useRef<HTMLDivElement>(null);

  const enforceConstraints = React.useCallback(
    (instance: Ranger<HTMLDivElement>) => {
      const { activeHandleIndex, sortedValues } = instance;

      if (activeHandleIndex === undefined) {
        return;
      }

      const activeValue = sortedValues[activeHandleIndex];
      const prevValue = sortedValues[activeHandleIndex - 1] ?? min - stepSize;
      const nextValue = sortedValues[activeHandleIndex + 1] ?? max + stepSize;

      const rangeMin = Math.max(min, prevValue + stepSize);
      const rangeMax = Math.min(max, nextValue - stepSize);

      const clampedValue = Math.min(Math.max(activeValue, rangeMin), rangeMax);

      instance.tempValues = sortedValues;
      // Update the constrained value only if it differs
      if (clampedValue !== activeValue) {
        const newValues = [...sortedValues];
        newValues[activeHandleIndex] = clampedValue;
        instance.tempValues = newValues;
      }

      instance.options.rerender();
    },
    [min, max, stepSize],
  );

  const handleChange = React.useCallback(
    (instance: Ranger<HTMLDivElement>) =>
      onChange?.(instance.sortedValues as number[]),
    [onChange],
  );
  const handleDrag = React.useCallback(
    (instance: Ranger<HTMLDivElement>) => {
      if (constrained) {
        enforceConstraints(instance);
      }
      onDrag?.(instance.sortedValues as number[]);
    },
    [onDrag, constrained],
  );

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min,
    max,
    stepSize,
    onChange: handleChange,
    onDrag: handleDrag,
  });

  const getSegmentClassname = (index: number): string =>
    segmentClassnameArray[index] || "bg-secondary";

  const getSliderClassname = (index: number): string =>
    sliderClassnameArray[index] || "bg-primary";

  return (
    <div
      ref={rangerRef}
      className={twMerge("relative h-3 rounded-full shadow-1", className)}
    >
      {showTicks &&
        rangerInstance.getTicks().map(({ value, key, percentage }) => (
          <div
            key={key}
            className="absolute flex -translate-x-1/2 flex-col items-center justify-center"
            style={{
              left: `${percentage}%`,
              top: showMarkers ? " calc(150% + 1rem)" : "150%",
            }}
          >
            <div className="h-2 w-px bg-tertiary" />
            <div className="text-xs text-tertiary">{value}</div>
          </div>
        ))}

      {rangerInstance.getSteps().map(({ left, width }, i) => (
        <div
          key={i}
          className={twMerge(
            "absolute h-full rounded-full",
            getSegmentClassname(i),
          )}
          style={{
            width: `${width}%`,
            left: `${left}%`,
          }}
        />
      ))}

      {rangerInstance
        .handles()
        .map(
          (
            {
              value,
              onKeyDownHandler,
              onMouseDownHandler,
              onTouchStart,
              isActive,
            },
            i,
          ) => (
            <React.Fragment key={i}>
              <button
                onKeyDown={onKeyDownHandler}
                onMouseDown={onMouseDownHandler}
                onTouchStart={onTouchStart}
                role="slider"
                aria-valuemin={rangerInstance.options.min}
                aria-valuemax={rangerInstance.options.max}
                aria-valuenow={value}
                className={twMerge(
                  "absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-secondary shadow-2",
                  isActive ? "z-10" : "z-0",
                  getSliderClassname(i),
                )}
                style={{
                  left: `${rangerInstance.getPercentageForValue(value)}%`,
                  height: "150%",
                }}
              />
              {showMarkers && (
                <Marker
                  value={value}
                  rangerInstance={rangerInstance}
                  max={max}
                  index={i}
                  type={type}
                  collidingThreshold={collidingThreshold}
                />
              )}
            </React.Fragment>
          ),
        )}
    </div>
  );
};

export type { TRangeSliderProps };
export default RangeSlider;
