"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type MovingBorderShellProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "className" | "children">;

type MovingBorderShellRootProps = {
  as: React.ElementType;
  borderRadius: string;
  borderRx: string;
  borderRy: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  otherProps: Omit<
    MovingBorderShellProps,
    | "as"
    | "borderRadius"
    | "children"
    | "containerClassName"
    | "borderClassName"
    | "duration"
    | "className"
  >;
};

function MovingBorderShellRoot({
  as: Component,
  borderRadius,
  borderRx,
  borderRy,
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  otherProps,
}: MovingBorderShellRootProps) {
  return React.createElement(
    Component,
    {
      className: cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-px text-xl",
        containerClassName,
      ),
      style: { borderRadius },
      ...otherProps,
    },
    <div
      className="absolute inset-0"
      style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
    >
      <MovingBorder duration={duration} rx={borderRx} ry={borderRy}>
        <div
          className={cn(
            "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
            borderClassName,
          )}
        />
      </MovingBorder>
    </div>,
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 text-sm text-white antialiased backdrop-blur-xl",
        className,
      )}
      style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
    >
      {children}
    </div>,
  );
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingBorderShellProps) {
  return MovingBorderShellRoot({
    as: Component,
    borderRadius,
    borderRx: "30%",
    borderRy: "30%",
    children,
    containerClassName,
    borderClassName,
    duration,
    className,
    otherProps,
  });
}

export function MovingBorderComponent({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingBorderShellProps) {
  return MovingBorderShellRoot({
    as: Component,
    borderRadius,
    borderRx: "0%",
    borderRy: "0%",
    children,
    containerClassName,
    borderClassName,
    duration,
    className,
    otherProps,
  });
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
