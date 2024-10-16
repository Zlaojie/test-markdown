import { User } from '~/types/user/user';

export const DEFAULT_AUTO_EXPAND_NUM = 6;

export enum CodeTrendTabs {
  CODe_trend = 'code_trend',
}

export type TabsType = {
  [key: string]: {
    value: CodeTrendTabs;
    label: string;
    badge?: number;
  };
};

export enum CommitType {
  COMMON = 'COMMON', // 是否过滤合并点
  FORK = 'FORK', // 是否包含forkMr
  MERGE = 'MERGE', // 是否包含merge点
}

export enum IntervalType {
  DAY = 'DAY', // by day
  WEEK = 'WEEK', // by week
  MONTH = 'MONTH', // by month
  YEAR = 'YEAR', // by year
}

export interface CodeTrendForm {
  ref?: string; // 版本库ref，可以是barnch / tag / commit sha
  beginDate: number; // 开始时间
  endDate: number; // 结束时间
  interval: IntervalType; // 时间间隔
  applyIgnoreRules?: boolean; // 默认值true， 是否过滤合并点
  applyIgnoreForkMr?: boolean; // 默认值false， 是否包含forkMr
  timezone: number;
}

export interface CodeTrendStatistics {
  periodDiffs: PeriodDiff[]; // 项目内 新增代码行、修改代码行、删除代码行 趋势
  userDiffs: UserCommitDiff[]; // 用户数提交排行
  fileDiffs: FilePathDiff[]; // 代码变更行排行
  fileCommits: FilePathDiff[]; // 文件变更次数排行
}

export interface CodeTrendDiff {
  sourceAdd: number;
  sourceMod: number;
  sourceDel: number;
  commentAdd: number;
  commentMod: number;
  commentDel: number;
  blankAdd: number;
  blankMod: number;
  blankMel: number;
  totalAdd: number;
  totalMod: number;
  totalDel: number;
  totalWork: number;
}

export interface PeriodDiff extends CodeTrendDiff {
  beginDate: number;
  endDate: number;
}

export interface CommitDiff extends CodeTrendDiff {
  username: string;
  commitCount: number;
  commitFileCount: number;
}

export interface UserCommitDiff {
  user: User;
  diff: CommitDiff;
}

export interface FilePathDiff extends CodeTrendDiff {
  path: string;
  commitCount: number;
}

let aaa = 1;
console.log(aaa);
