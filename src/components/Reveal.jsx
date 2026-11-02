import { useReveal } from '../hooks/useMotion';

/**
 * Reveals children on scroll. The element is fully visible when the user has
 * asked for reduced motion, and stays visible if IntersectionObserver is absent.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
  children,
  ...rest
}) {
  const { ref } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
