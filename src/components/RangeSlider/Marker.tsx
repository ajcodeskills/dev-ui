import { Ranger } from "@tanstack/react-ranger";
import { useMemo } from "react";

type TMarkerProps = {
  rangerInstance: Ranger<HTMLDivElement>;
  value: number;
  max: number;
  index: number;
  type?: "VALUE" | "PERCENTAGE";
  collidingThreshold: number;
};

const Marker = ({
  rangerInstance,
  value,
  max,
  index,
  type = "VALUE",
  collidingThreshold,
}: TMarkerProps) => {
  const activeIndex = rangerInstance.activeHandleIndex;
  const handles = rangerInstance.handles();
  const nextValue = handles[index + 1]?.value;
  const previousValue = handles[index - 1]?.value;

  const currentValuePercentage = useMemo(
    () => rangerInstance.getPercentageForValue(value),
    [value, rangerInstance],
  );

  const isSibling = useMemo(() => {
    if (activeIndex === undefined) return false;
    return Math.abs(activeIndex - index) <= 1;
  }, [activeIndex, index]);

  const prevCollision = useMemo(() => {
    if (previousValue === undefined) return false;
    const previousValuePercentage =
      rangerInstance.getPercentageForValue(previousValue);
    return (
      Math.abs(currentValuePercentage - previousValuePercentage) <
      collidingThreshold
    );
  }, [
    previousValue,
    currentValuePercentage,
    collidingThreshold,
    rangerInstance,
    isSibling,
  ]);

  const nextCollision = useMemo(() => {
    if (nextValue === undefined) return false;
    const nextValuePercentage = rangerInstance.getPercentageForValue(nextValue);
    return (
      Math.abs(nextValuePercentage - currentValuePercentage) <
      collidingThreshold
    );
  }, [
    nextValue,
    currentValuePercentage,
    collidingThreshold,
    rangerInstance,
    isSibling,
  ]);

  const shiftToTop = (prevCollision || nextCollision) && index % 2 === 1;

  return (
    <div
      className="absolute -translate-x-1/2 text-xs font-semibold text-secondary"
      style={{
        left: `${currentValuePercentage}%`,
        top: shiftToTop ? "-150%" : "150%",
      }}
    >
      {type === "PERCENTAGE"
        ? Math.round((value / max) * 100)
        : Math.round(value)}
    </div>
  );
};

export default Marker;
