import { actions } from './actions';

type DictionaryActions = Record<string, (...args: any) => any>;

type ExtractActions<T extends DictionaryActions> = {
    [P in keyof T]: ReturnType<T[P]>;
}[keyof T];

export type ActionTypes = ExtractActions<typeof actions>;

export type State = { isHeaderBannerVisible: boolean };

export type ContextType = {
    state: State;
    dispatch: (action: ActionTypes) => void;
};
