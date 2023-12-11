import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DELETE';

type ButtonProps = {
  type: ButtonTypeStyleProps;
  disabled?: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_700;
      case 'SECONDARY':
        return theme.COLORS.GRAY_300;
      case 'DELETE':
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.GREEN_700;
    }
  }};

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.2;
    `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
