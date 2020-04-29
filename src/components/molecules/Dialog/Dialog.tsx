import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BoxProps } from '../../quarks';
import { Backdrop } from '../../atoms';
import {
  DialogBody,
  DialogCancel,
  DialogFooter,
  DialogHeader,
  DialogPaper,
  DialogSubmit,
  DialogTitle,
  DialogSubtitle,
  DialogClose,
  DialogOuter,
} from './Dialog.components';

export const Dialog: TDialog = ({ onClose, content, children, ...props }) => {
  const ref = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(ref.current);
    return () => {
      document.body.removeChild(ref.current);
    };
  }, []);

  return createPortal(
    <DialogOuter fullScreen={!content}>
      <Backdrop onClick={onClose} />
      <DialogPaper fullScreen={!content} {...props}>
        <DialogClose onClick={onClose} />
        {content ? (
          <>
            <DialogHeader sx={{ pb: 2, border: 0 }}>
              <DialogTitle>{content.title}</DialogTitle>
            </DialogHeader>
            <DialogBody>{content.body}</DialogBody>
            {content.onConfirm || content.onCancel || content.confirm || content.cancel ? (
              <DialogFooter flexDirection="column">
                {content.onConfirm && (
                  <DialogSubmit onClick={content.onConfirm}>
                    {content.confirm ?? 'Zatwierdź'}
                  </DialogSubmit>
                )}
                {content.onCancel ||
                  (content.cancel && (
                    <DialogCancel mt={3} onClick={content.onCancel ?? onClose}>
                      {content.cancel ?? 'Anuluj'}
                    </DialogCancel>
                  ))}
              </DialogFooter>
            ) : null}
          </>
        ) : (
          children
        )}
      </DialogPaper>
    </DialogOuter>,
    ref.current
  );
};

Dialog.Submit = DialogSubmit;
Dialog.Cancel = DialogCancel;
Dialog.Title = DialogTitle;
Dialog.Subtitle = DialogSubtitle;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;

export interface IDialogContent {
  title: string;
  body: string;
  cancel?: string;
  confirm?: string;
  onCancel?(): void;
  onConfirm?(): void;
}

interface IDialogPropsBase extends Omit<BoxProps, 'content'> {
  onClose(): void;
}

interface IDialogPropsWithChildren extends IDialogPropsBase {
  children: ReactNode;
  content?: undefined;
}
interface IDialogPropsWithContent extends IDialogPropsBase {
  content: IDialogContent;
  children?: undefined;
}

export type IDialogProps = IDialogPropsWithChildren | IDialogPropsWithContent;

export type TDialog = FC<IDialogProps> & {
  Submit: typeof DialogSubmit;
  Cancel: typeof DialogCancel;
  Title: typeof DialogTitle;
  Subtitle: typeof DialogSubtitle;
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
  Close: typeof DialogClose;
};
