import React, { cloneElement, Children, isValidElement } from 'react';
import { ToggleLayer, Transition, RenderLayerProps, LayerSide } from 'react-laag';
import { Props as ToggleLayerProps } from 'react-laag/dist/ToggleLayer/ToggleLayer';
import ResizeObserver from 'resize-observer-polyfill';
import { SystemStyleObject } from '@styled-system/css';

interface TriggerProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  triggerRef: React.Ref<any>;
  layerSide: LayerSide | null;
}

interface LayerProps extends Omit<RenderLayerProps, 'layerProps'> {
  onTransitionEnd(): void;
  sx: SystemStyleObject;
  ref: React.Ref<any>;
}

export interface MenuProps extends Omit<ToggleLayerProps, 'children' | 'renderLayer'> {
  layer: (props: LayerProps) => React.ReactElement;
  trigger: ((props: TriggerProps) => React.ReactElement) | React.ReactElement;
}

export const Menu = ({ trigger, layer, placement, ...props }: MenuProps) => {
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
    layerProps: { ref, style },
    triggerRect,
    ...renderLayerProps
  }: RenderLayerProps) => (
    <Transition isOpen={isOpen}>
      {(open, onTransitionEnd) => {
        return layer({
          ...renderLayerProps,
          ref,
          isOpen: open,
          onTransitionEnd,
          triggerRect,
          sx: {
            ...style,
            zIndex: 100,
            borderRadius: 1,
            border: 1,
            maxHeight: '18.8rem',
            overflowY: 'auto',
            bg: 'white',
            transition: 'opacity 150ms ease-in-out;',
            opacity: open ? 1 : 0,
            width: triggerRect!.width,
          },
        });
      }}
    </Transition>
  );
  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={renderLayer}
      placement={{
        anchor: 'BOTTOM_CENTER',
        possibleAnchors: ['BOTTOM_LEFT', 'BOTTOM_RIGHT'],
        autoAdjust: true,
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
