import { ComponentProps } from "react";

export function BasketIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M13.8029 8.61538V4.46154C13.8029 3.54348 13.4023 2.66303 12.6892 2.01386C11.9761 1.3647 11.0089 1 10.0004 1C8.99196 1 8.02479 1.3647 7.31168 2.01386C6.59858 2.66303 6.19796 3.54348 6.19796 4.46154V8.61538M17.7129 6.77569L18.9936 17.8526C19.0646 18.4665 18.5373 19 17.8589 19H2.14197C1.98197 19.0002 1.82372 18.9697 1.67751 18.9105C1.53129 18.8514 1.40038 18.7649 1.29328 18.6567C1.18617 18.5485 1.10527 18.421 1.05583 18.2824C1.00639 18.1439 0.98951 17.9975 1.00629 17.8526L2.28798 6.77569C2.31755 6.52052 2.44984 6.28434 2.65936 6.1127C2.86888 5.94106 3.14078 5.84611 3.42265 5.84615H16.5782C17.1623 5.84615 17.6521 6.24769 17.7129 6.77569ZM6.57821 8.61538C6.57821 8.70719 6.53814 8.79524 6.46683 8.86015C6.39552 8.92507 6.29881 8.96154 6.19796 8.96154C6.09711 8.96154 6.00039 8.92507 5.92908 8.86015C5.85777 8.79524 5.81771 8.70719 5.81771 8.61538C5.81771 8.52358 5.85777 8.43553 5.92908 8.37062C6.00039 8.3057 6.09711 8.26923 6.19796 8.26923C6.29881 8.26923 6.39552 8.3057 6.46683 8.37062C6.53814 8.43553 6.57821 8.52358 6.57821 8.61538ZM14.1832 8.61538C14.1832 8.70719 14.1431 8.79524 14.0718 8.86015C14.0005 8.92507 13.9038 8.96154 13.8029 8.96154C13.7021 8.96154 13.6054 8.92507 13.5341 8.86015C13.4627 8.79524 13.4227 8.70719 13.4227 8.61538C13.4227 8.52358 13.4627 8.43553 13.5341 8.37062C13.6054 8.3057 13.7021 8.26923 13.8029 8.26923C13.9038 8.26923 14.0005 8.3057 14.0718 8.37062C14.1431 8.43553 14.1832 8.52358 14.1832 8.61538Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
