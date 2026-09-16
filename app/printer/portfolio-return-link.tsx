type PortfolioReturnLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: "up" | "back";
  className?: string;
};

export default function PortfolioReturnLink({
  href,
  children,
  direction = "back",
  className = "",
}: PortfolioReturnLinkProps) {
  return (
    <a className={`portfolio-return-link ${className}`.trim()} href={href}>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        {direction === "up" ? (
          <><path d="M12 19V5" /><path d="m6.5 10.5 5.5-5.5 5.5 5.5" /></>
        ) : (
          <><path d="M19 12H5" /><path d="m10.5 6.5-5.5 5.5 5.5 5.5" /></>
        )}
      </svg>
      <span>{children}</span>
    </a>
  );
}
