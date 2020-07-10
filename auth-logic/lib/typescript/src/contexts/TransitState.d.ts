/**
 * @packageDocumentation
 * @module TransitState
 * @internal
 */
/**
 * Keeps track of the state of a network call.
 *
 * @param transitId The identifier for a specific network call. Can be used to ignore an old return if a modal dismisses or another action fires.
 * @param transitErrorMessage An error message describing the failure of the last network call, or null if the last call was a success.
 * @param transitInProgress Returns true if the network call is currently active and awaiting a response.
 * @param transitComplete Returns true if a network call has completed, either successfully or unsuccessfully.
 * @param transitSuccess Returns true if the previously completed network call returned without error.
 */
export declare type TransitState = {
    transitId: number | null;
    transitErrorMessage: string | null;
    transitInProgress: boolean;
    transitComplete: boolean;
    transitSuccess: boolean;
};
/**
 * Default transit state for a network call that has not yet fired.
 */
export declare const initialTransitState: TransitState;
export declare const transitStart: (transitId?: number | null) => TransitState;
export declare const transitSuccess: (transitId?: number | null) => TransitState;
export declare const transitFailed: (errorMessage: string, transitId?: number | null) => TransitState;
