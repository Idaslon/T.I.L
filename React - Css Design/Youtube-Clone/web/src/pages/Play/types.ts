export interface Progress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export interface InitialProgress {
  progress: number;
  loaded?: boolean;
}
