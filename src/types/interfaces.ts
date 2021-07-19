import { Boss, Minigame, Skill } from "./types";

export interface UserHiscore {
  username: string;
  data: {
    skills: Array<Skill>;
    minigames: Array<Minigame>;
    bosses: Array<Boss>;
  };
}
