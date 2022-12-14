/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-11 17:41:38
 * @LastEditTime: 2022-08-15 10:30:05
 */
import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type Icon =
  | "search"
  | "edit"
  | "check"
  | "message"
  | "star-off"
  | "delete"
  | "add"
  | "share";
export type ISize = "small" | "medium" | "large";
export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  icon: {
    type: String as PropType<Icon>,
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
};
export default defineComponent({
  name: "ZButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => {
      return (
        <button
          class={`
                        py-${size[props.size].y}
                        px-${size[props.size].x}
                        ${props.round ? "rounded-full" : "rounded-lg"}
                        bg-${props.color}-${props.plain ? "100" : "500"}
                        hover:bg-${props.color}-400
                        border-${props.color}-${props.plain ? "500" : "500"}
                        cursor-pointer
                        border-solid
                        text-${props.plain ? props.color + "-500" : "white-500"}
                        text-${size[props.size].text}
                        hover:text-white
                        transition duration-300 ease-in-out transform hover:scale-105
                        mx-1
                        `}
        >
          {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
          {slots.default ? slots.default() : "Button"}
        </button>
      );
    };
  },
});
