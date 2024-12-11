import { Button, Icon } from '@components';
import { borders, colors, radius, shadows, spacing, transition, typography } from '@components/theme';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { formLabelTextStyles, inputPlaceholderTextStyles, inputValueTextStyles } from '../commonStyles';
import { SelectSizeOptions, SelectStyleProps } from './types';
import { getOptionLabelStyle, getSelectFontStyles, getSelectStyle } from './utils';

const sharedTransition = `${transition.property.colors} ${transition.easing['ease-in-out']} ${transition.duration.normal}`;

/**
 * Base Select component styling
 */
export const SelectBase = styled.div<SelectStyleProps>(({ isDisabled, isReadOnly, fontSize, isOpen }) => ({
    ...getSelectStyle({ isDisabled, isReadOnly, fontSize, isOpen }),
    display: 'flex',
    flexDirection: 'row' as const,
    gap: spacing.xsm,
    transition: sharedTransition,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'auto',
    backgroundColor: isDisabled ? colors.gray[100] : 'white',
}));

/**
 * Styled components specific to the Basic version of the Select component
 */

// Container for the Basic Select component
interface ContainerProps {
    size: SelectSizeOptions;
    width?: number | 'full';
}

export const Container = styled.div<ContainerProps>(({ size, width }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: width === 'full' ? '100%' : `${width}px`,
    gap: '4px',
    transition: sharedTransition,
    minWidth: '175px',
    ...getSelectFontStyles(size),
    ...inputValueTextStyles(size),
}));

export const Dropdown = styled.div({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: radius.md,
    background: colors.white,
    zIndex: 1,
    transition: sharedTransition,
    boxShadow: shadows.dropdown,
    padding: spacing.xsm,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '4px',
    maxHeight: '360px',
    overflow: 'auto',
});

export const SearchInputContainer = styled.div({
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
});

export const SearchInput = styled.input({
    width: '100%',
    borderRadius: radius.md,
    border: `1px solid ${colors.gray[200]}`,
    color: colors.gray[500],
    fontFamily: typography.fonts.body,
    fontSize: typography.fontSizes.sm,
    padding: spacing.xsm,
    paddingRight: spacing.xlg,

    '&:focus': {
        borderColor: colors.violet[200],
        outline: `${borders['1px']} ${colors.violet[200]}`,
    },
});

export const SearchIcon = styled(Icon)({
    position: 'absolute',
    right: spacing.sm,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
});

// Styled components for SelectValue (Selected value display)
export const SelectValue = styled.span({
    ...inputValueTextStyles(),
});

export const Placeholder = styled.span({
    ...inputPlaceholderTextStyles,
});

export const ActionButtonsContainer = styled.div({
    display: 'flex',
    gap: '6px',
    flexDirection: 'row',
    alignItems: 'center',
});

/**
 * Components that can be reused to create new Select variants
 */

export const FooterBase = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: spacing.sm,
    paddingTop: spacing.sm,
    borderTop: `1px solid ${colors.gray[100]}`,
});

export const OptionList = styled.div({
    display: 'flex',
    flexDirection: 'column' as const,
});

export const LabelContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
});

export const OptionContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

export const DescriptionContainer = styled.span({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    color: colors.gray[500],
    lineHeight: 'normal',
    fontSize: typography.fontSizes.sm,
    marginTop: spacing.xxsm,
});

export const LabelsWrapper = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.xxsm,
    maxHeight: '150px',
    maxWidth: 'calc(100% - 54px)',
});

export const OptionLabel = styled.label<{ isSelected: boolean; isMultiSelect?: boolean; isDisabled?: boolean }>(
    ({ isSelected, isMultiSelect, isDisabled }) => ({
        ...getOptionLabelStyle(isSelected, isMultiSelect, isDisabled),
    }),
);

export const SelectAllOption = styled.div<{ isSelected: boolean; isDisabled?: boolean }>(
    ({ isSelected, isDisabled }) => ({
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        padding: spacing.xsm,
        color: isSelected ? colors.violet[700] : colors.gray[500],
        fontWeight: typography.fontWeights.semiBold,
        fontSize: typography.fontSizes.md,
        display: 'flex',
        alignItems: 'center',
    }),
);

export const SelectLabel = styled.label({
    ...formLabelTextStyles,
    marginBottom: spacing.xxsm,
    textAlign: 'left',
});

export const StyledCancelButton = styled(Button)({
    backgroundColor: colors.violet[100],
    color: colors.violet[500],
    borderColor: colors.violet[100],

    '&:hover': {
        backgroundColor: colors.violet[200],
        borderColor: colors.violet[200],
    },
});

export const StyledClearButton = styled(Button)({
    backgroundColor: colors.gray[200],
    border: `1px solid ${colors.gray[200]}`,
    color: colors.black,
    padding: '1px',

    '&:hover': {
        backgroundColor: colors.violet[100],
        color: colors.violet[700],
        borderColor: colors.violet[100],
        boxShadow: shadows.none,
    },

    '&:focus': {
        backgroundColor: colors.violet[100],
        color: colors.violet[700],
        boxShadow: `0 0 0 2px ${colors.white}, 0 0 0 4px ${colors.violet[50]}`,
    },
});

export const ClearIcon = styled.span({
    cursor: 'pointer',
    marginLeft: '8px',
});

export const ArrowIcon = styled.span<{ isOpen: boolean }>(({ isOpen }) => ({
    marginLeft: 'auto',
    border: 'solid black',
    borderWidth: '0 1px 1px 0',
    display: 'inline-block',
    padding: '3px',
    transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
}));

export const StyledCheckbox = styled(Checkbox)({
    '.ant-checkbox-checked:not(.ant-checkbox-disabled) .ant-checkbox-inner': {
        backgroundColor: colors.violet[500],
        borderColor: `${colors.violet[500]} !important`,
    },
});
