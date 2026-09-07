import BrandIcon from './BrandIcon'

export default function TechLogo({ name, size = 20, className = '' }) {
  return <BrandIcon label={name} size={size} className={className} />
}