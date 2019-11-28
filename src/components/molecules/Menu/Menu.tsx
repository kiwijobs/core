import React, { cloneElement, Children, isValidElement } from 'react';
import { ToggleLayer, Transition, RenderLayerProps, LayerSide } from 'react-laag';
import { Props as ToggleLayerProps } from 'react-laag/dist/ToggleLayer/ToggleLayer';
import ResizeObserver from '@juggle/resize-observer';
import { Box } from '../../quarks';
import { Backdrop } from '../../atoms/Backdrop';

interface TriggerProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  triggerRef: React.RefObject<any>;
  layerSide: LayerSide | null;
}

interface LayerProps extends RenderLayerProps {
  onTransitionEnd(): void;
}

export interface MenuProps extends Omit<ToggleLayerProps, 'children' | 'renderLayer'> {
  layer: ((props: LayerProps) => React.ReactElement) | React.ReactElement;
  trigger: ((props: TriggerProps) => React.ReactElement) | React.ReactElement;
  closeOnClick?: boolean;
  withBackdrop?: boolean;
}

export const Menu = ({
  trigger,
  layer,
  closeOnClick = true,
  placement,
  withBackdrop,
  ...props
}: MenuProps) => {
  const renderTrigger = (childrenProps: TriggerProps) => {
    if (isValidElement(trigger)) {
      return cloneElement(Children.only(trigger), {
        ref: childrenProps.triggerRef,
        onClick: childrenProps.toggle,
      });
    }

    return trigger(childrenProps);
  };

  const renderLayer = ({
    isOpen,
    layerProps,
    close,
    triggerRect,
    ...restLayerProps
  }: RenderLayerProps) => (
    <Transition isOpen={isOpen}>
      {(open, onTransitionEnd) => {
        if (isValidElement(layer)) {
          return (
            <Box
              ref={layerProps.ref}
              sx={{
                ...layerProps.style,
                zIndex: 100,
                transition: 'opacity 150ms ease-in-out',
                opacity: open ? 1 : 0,
                minWidth: 'max-content',
                width: [triggerRect!.width],
              }}
              onClick={closeOnClick ? close : undefined}
              onTransitionEnd={onTransitionEnd}
              {...restLayerProps}
            >
              {layer}
              {withBackdrop && open && <Backdrop zIndex={-1} />}
            </Box>
          );
        }

        return layer({
          isOpen: open,
          close,
          triggerRect,
          layerProps,
          onTransitionEnd,
          ...restLayerProps,
        });
      }}
    </Transition>
  );
  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={renderLayer}
      placement={{
        anchor: 'BOTTOM_LEFT',
        autoAdjust: true,
        possibleAnchors: ['BOTTOM_LEFT', 'BOTTOM_RIGHT'],
        triggerOffset: -1,
        ...placement,
      }}
      closeOnOutsideClick
      closeOnDisappear="full"
      {...props}
    >
      {renderTrigger}
    </ToggleLayer>
  );
};
