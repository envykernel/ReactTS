interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
}

const Badge = ({ text, variant = 'primary' }: BadgeProps) => {
  return (
    <div className={`badge badge-${variant} gap-2`}>
      {text}
    </div>
  );
};

export default Badge; 