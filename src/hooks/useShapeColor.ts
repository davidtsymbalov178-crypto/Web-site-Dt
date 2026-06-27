import { useTheme } from '../context/ThemeContext'

export function useShapeColor() {
  const { theme } = useTheme()
  return theme === 'dark' ? '#6b7280' : '#9ca3af'
}

export function useShapeGlow() {
  return 'none'
}
