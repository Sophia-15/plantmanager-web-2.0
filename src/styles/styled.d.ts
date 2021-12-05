import 'styled-components';
import light from './themes/light';

declare module 'styled-components' {
  type ThemeType = typeof light

  export interface DefaultTheme extends ThemeType {}
}
