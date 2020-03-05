import React from 'react';
import { Graph } from '@/common/interfaces';
import withContext from '@/common/withContext';

export interface EditorContextProps {
  graph: Graph | null;
  executeCommand: (name: string, params?: object) => void;
}

export interface EditorPrivateContextProps {
  setGraph: (graph: Graph) => void;
}

export const EditorContext = React.createContext({} as EditorContextProps);
export const EditorPrivateContext = React.createContext({} as EditorPrivateContextProps);

export const withEditorContext = withContext<EditorContextProps>(EditorContext, context => !!context.graph);
export const withEditorPrivateContext = withContext<EditorPrivateContextProps>(EditorPrivateContext);
