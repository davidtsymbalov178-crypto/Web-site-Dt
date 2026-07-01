import { useTheme } from '../context/ThemeContext'

export function useShapeColor() {
  const { theme } = useTheme()
  return theme === 'dark' ? '#6b7280' : '#78716a'
}

export function useShapeGlow() {
  return 'none'
}
