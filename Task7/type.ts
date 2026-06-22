export interface User {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
  role: string;
  createdAt: string;
  profile: Profile;
  preferences: Preferences;
  subscription: Subscription;
  teams: Team[];
  projects: Project[];
  activityLog: ActivityLog[];
  security: Security;
  metadata: Metadata;
}

export interface ActivityLog {
  action: string;
  ip: string;
  device: string;
  timestamp: string;
}

export interface Metadata {
  source: string;
  imported: boolean;
  tags: string[];
}

export interface Preferences {
  language: string;
  timezone: string;
  notifications: Notifications;
  theme: string;
}

export interface Notifications {
  email: boolean;
  sms: boolean;
  push: boolean;
  marketingEmails: boolean;
}

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phoneNumbers: PhoneNumber[];
  address: Address;
  socialLinks: SocialLinks;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  geo: Geo;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface PhoneNumber {
  type: string;
  number: string;
  verified: boolean;
}

export interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

export interface Project {
  projectId: string;
  name: string;
  status: string;
  tags: string[];
  tasks: Task[];
}

export interface Task {
  taskId: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

export interface Security {
  twoFactorEnabled: boolean;
  backupCodes: string[];
  lastPasswordChange: string;
}

export interface Subscription {
  plan: string;
  status: string;
  billingCycle: string;
  price: number;
  currency: string;
  startedAt: string;
  renewalDate: string;
  features: string[];
}

export interface Team {
  teamId: string;
  name: string;
  role: string;
  members: Member[];
}

export interface Member {
  userId: string;
  name: string;
  email: string;
}
