export interface Progress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export interface InitialProgressResponse {
  progress: number;
}

export interface InitialProgressState {
  progress: number;
  loaded?: boolean;
}
