import { Meta, StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import Progress from "./";

export default {
  component: Progress,
  title: "ProgressBar",
} as Meta;

const Template: StoryFn<typeof Progress> = (args) => {
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // const total = 60;

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (error) {
        clearInterval(interval);
        return;
      }

      setProgress((prev) => {
        if (prev < 100) return prev + 1;

        clearInterval(interval);
        setIsRunning(false); // Stop automatically when progress reaches 100
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, error]);

  const handleStart = () => {
    setError(null); // Clear any existing error
    setProgress((prev) => (prev >= 100 ? 0 : prev)); // Reset progress if complete
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleError = () => {
    setError("Oops! Something went wrong");
    setIsRunning(false);
  };

  return (
    <div className="flex min-h-fit flex-col items-center justify-center bg-primary p-4">
      <Progress {...args} progress={progress} error={error} />
      <div className="mt-4 flex gap-2">
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleError}>Create Error</Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "sm",
  variant: "primary",
};
