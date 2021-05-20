export interface Flags {
  // TODO
}

export interface Geo {
  country: string;
}

export interface Switches {
  welcome_email: boolean;
}

export interface Waffle {
  flags: Flags;
  switches: Switches;
}