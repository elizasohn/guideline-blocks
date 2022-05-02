/* (c) Copyright Frontify Ltd., all rights reserved. */

import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { CodeMirrorEditorProps, CodeMirrorEditorStyle } from '../../types';
import { basicSetup } from './extensions';
import { useHeaderPanel, useLangauge, useLineNumber, useTheme, useUpdateListener } from './hooks';

export const CodeMirrorEditor = ({
    id,
    theme,
    language = 'html',
    border = 'none',
    padding = 'none',
    borderRadius = 'none',
    withHeading = false,
    withRowNumbers = false,
    initValue = '',
    onChange,
}: CodeMirrorEditorProps): ReactElement => {
    const editorRef = useRef<HTMLElement>(null);
    const [view, setView] = useState<EditorView>(new EditorView());

    useLangauge(view, language);
    useHeaderPanel(view, language, withHeading);
    useTheme(view, theme);
    useLineNumber(view, withRowNumbers);

    if (typeof onChange === 'function') {
        useUpdateListener(view, onChange);
    }

    useEffect(() => {
        if (editorRef.current === null) {
            return;
        }

        const state = EditorState.create({ doc: initValue, extensions: basicSetup });

        view.destroy();

        setView(
            new EditorView({
                state,
                parent: editorRef.current,
            })
        );
        return () => {
            view.destroy();
            setView(new EditorView());
        };
    }, [editorRef.current, basicSetup]);

    const style: CodeMirrorEditorStyle = {
        '--editor-border': border,
        '--editor-padding': padding,
        '--editor-border-radius': borderRadius,
    };

    return <section data-test-id="code-snippet-block" id={id} style={style} ref={editorRef} />;
};
