/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccessTokenAction {
  CHALLENGE_ALLOCATE_KAI = "CHALLENGE_ALLOCATE_KAI",
  CHALLENGE_INFO = "CHALLENGE_INFO",
  CHALLENGE_MANAGE = "CHALLENGE_MANAGE",
  CHALLENGE_MANAGE_BACKERS = "CHALLENGE_MANAGE_BACKERS",
  CHALLENGE_MANAGE_PARTICIPANTS = "CHALLENGE_MANAGE_PARTICIPANTS",
  CHALLENGE_MANAGE_STEPS = "CHALLENGE_MANAGE_STEPS",
  CHALLENGE_MANAGE_UPDATES = "CHALLENGE_MANAGE_UPDATES",
  CHALLENGE_UPDATE = "CHALLENGE_UPDATE",
  CONFIGURATION = "CONFIGURATION",
  GLOBAL_MANAGE_POSTS = "GLOBAL_MANAGE_POSTS",
  MAIL = "MAIL",
  MANAGE_ORGANIZATIONS = "MANAGE_ORGANIZATIONS",
  MY_INFO = "MY_INFO",
  NOTIFICATIONS = "NOTIFICATIONS",
  ORGANIZATIONS = "ORGANIZATIONS",
  PROJECT = "PROJECT",
  SESSION = "SESSION",
  TOKEN_MANAGEMENT = "TOKEN_MANAGEMENT",
  TRANSACTIONS = "TRANSACTIONS",
  USERS = "USERS",
  VOUCHER_MANAGE = "VOUCHER_MANAGE",
}

export enum AccountVerificationStatus {
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  FINISHED = "FINISHED",
  INVALIDATED = "INVALIDATED",
  PENDING = "PENDING",
}

export enum AllowedParticipants {
  CROWD = "CROWD",
  SELECTED = "SELECTED",
}

export enum AssessResult {
  GO = "GO",
  NO_GO = "NO_GO",
}

export enum AttachmentsVisibility {
  CHALLENGE = "CHALLENGE",
  PUBLIC = "PUBLIC",
  REGULAR_USER = "REGULAR_USER",
}

export enum BrowserType {
  BOT = "BOT",
  CHROME = "CHROME",
  CURL = "CURL",
  EDGE = "EDGE",
  FIREFOX = "FIREFOX",
  IE = "IE",
  OPERA = "OPERA",
  SAFARI = "SAFARI",
  UNKNOWN = "UNKNOWN",
}

export enum CappedMinterType {
  CANDIDATE_ACCEPTED = "CANDIDATE_ACCEPTED",
  CANDIDATE_REJECTED = "CANDIDATE_REJECTED",
}

export enum ChallengeTabType {
  DYNAMIC_HTML = "DYNAMIC_HTML",
  STATIC = "STATIC",
}

export enum ChallengeType {
  CHALLENGE = "CHALLENGE",
  HIRING_CHALLENGE = "HIRING_CHALLENGE",
}

export enum Currency {
  BITCOIN = "BITCOIN",
  BRL = "BRL",
  DOLLAR = "DOLLAR",
  EOS = "EOS",
  ETHER = "ETHER",
  EURO = "EURO",
  KAI = "KAI",
  TLOS = "TLOS",
}

export enum DeliveryStatus {
  DELIVERED = "DELIVERED",
  DROPPED = "DROPPED",
  PROCESSED = "PROCESSED",
  UNPROCESSED = "UNPROCESSED",
}

export enum DeviceType {
  DESKTOP = "DESKTOP",
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  UNKNOWN = "UNKNOWN",
}

export enum DividendType {
  CHALLENGE_BACKER = "CHALLENGE_BACKER",
  CHALLENGE_BACKER_PROJECT = "CHALLENGE_BACKER_PROJECT",
  CHALLENGE_INNOVATOR = "CHALLENGE_INNOVATOR",
  CHALLENGE_PROJECT = "CHALLENGE_PROJECT",
  GLOBAL_BACKER = "GLOBAL_BACKER",
  GLOBAL_HIRING = "GLOBAL_HIRING",
  GLOBAL_INNOVATOR = "GLOBAL_INNOVATOR",
  GLOBAL_USER = "GLOBAL_USER",
}

export enum EmailStatusType {
  INVITE_TO_JURY = "INVITE_TO_JURY",
  INVITE_TO_JURY_PARTICIPANT = "INVITE_TO_JURY_PARTICIPANT",
  INVITE_TO_MENTOR = "INVITE_TO_MENTOR",
  INVITE_TO_ORGANIZATION = "INVITE_TO_ORGANIZATION",
  INVITE_TO_PARTICIPANT = "INVITE_TO_PARTICIPANT",
  RESET_PASSWORD = "RESET_PASSWORD",
  USER_CONFIRMATION = "USER_CONFIRMATION",
}

export enum EvaluationType {
  CRITERIA = "CRITERIA",
  GO_NOGO = "GO_NOGO",
  NONE = "NONE",
}

export enum Feature {
  CUSTOM_CHALLENGE_TAB = "CUSTOM_CHALLENGE_TAB",
  PRIVATE_CHALLENGE = "PRIVATE_CHALLENGE",
  VIDEO_LIVE_STREAM = "VIDEO_LIVE_STREAM",
}

export enum FormHookType {
  REGISTER_BACKER = "REGISTER_BACKER",
  REGISTER_PARTICIPANT = "REGISTER_PARTICIPANT",
  WEBHOOK = "WEBHOOK",
}

export enum FormOwnerType {
  ORGANIZATION = "ORGANIZATION",
  SYSTEM = "SYSTEM",
  USER = "USER",
}

export enum FormType {
  INTERNAL_FORM = "INTERNAL_FORM",
  TYPEFORM = "TYPEFORM",
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
}

export enum IdentityVerificationStatus {
  COMPLETED = "COMPLETED",
  TO_BE_STARTED = "TO_BE_STARTED",
  WAITING_TO_BE_PROCESSED = "WAITING_TO_BE_PROCESSED",
}

export enum InviteState {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
  REDEEMED = "REDEEMED",
}

export enum InviteToProjectState {
  ACCEPTED = "ACCEPTED",
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
  REJECTED = "REJECTED",
}

export enum InviteType {
  EMAIL = "EMAIL",
  EXTERNAL = "EXTERNAL",
  USER = "USER",
}

export enum JuryType {
  CROWD = "CROWD",
  ORGANIZATION = "ORGANIZATION",
  SELECTED = "SELECTED",
}

export enum MailThreadType {
  CHALLENGE = "CHALLENGE",
  ONE_TO_ONE = "ONE_TO_ONE",
  PROJECT = "PROJECT",
}

export enum MuxAssetStatus {
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  PREPARING = "PREPARING",
}

export enum MuxLiveStreamStatus {
  BROADCASTING = "BROADCASTING",
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  FINISHED = "FINISHED",
  IDLE = "IDLE",
}

export enum NotificationType {
  ADDED_AS_PROJECT_MEMBER = "ADDED_AS_PROJECT_MEMBER",
  ALLOCATE_RECEIVED = "ALLOCATE_RECEIVED",
  BACK_FAILED = "BACK_FAILED",
  BACK_SUCCESS = "BACK_SUCCESS",
  CHALLENGE_ANNOUNCEMENT = "CHALLENGE_ANNOUNCEMENT",
  CHALLENGE_GOT_PUBLISHED = "CHALLENGE_GOT_PUBLISHED",
  CHALLENGE_IN_REVIEW = "CHALLENGE_IN_REVIEW",
  CHALLENGE_TRANSFER_RECEIVED = "CHALLENGE_TRANSFER_RECEIVED",
  CHALLENGE_TRANSFER_SENT = "CHALLENGE_TRANSFER_SENT",
  CHALLENGE_TRANSFER_SENT_FAILED = "CHALLENGE_TRANSFER_SENT_FAILED",
  GENERAL_NOTIFICATION = "GENERAL_NOTIFICATION",
  INVITE_TO_PROJECT = "INVITE_TO_PROJECT",
  MAIL = "MAIL",
  ORGANIZATION = "ORGANIZATION",
  ORGANIZATION_GOT_PUBLISHED = "ORGANIZATION_GOT_PUBLISHED",
  ORGANIZATION_IN_REVIEW = "ORGANIZATION_IN_REVIEW",
  PROJECT_APPLICATION_ACCEPTED = "PROJECT_APPLICATION_ACCEPTED",
  PROJECT_APPLICATION_REJECTED = "PROJECT_APPLICATION_REJECTED",
  PROJECT_POSITION_APPLIED_SUCCESS = "PROJECT_POSITION_APPLIED_SUCCESS",
  RECEIVED_DIVIDEND = "RECEIVED_DIVIDEND",
  REFERRAL_CONFIRMED = "REFERRAL_CONFIRMED",
  REFERRED_CONFIRMED = "REFERRED_CONFIRMED",
  REGISTERED_AS_BACKER = "REGISTERED_AS_BACKER",
  REGISTERED_AS_BACKER_AND_INNOVATOR = "REGISTERED_AS_BACKER_AND_INNOVATOR",
  REGISTERED_AS_INNOVATOR = "REGISTERED_AS_INNOVATOR",
  REGISTERED_AS_MENTOR = "REGISTERED_AS_MENTOR",
  TRANSFER_RECEIVED = "TRANSFER_RECEIVED",
  TRANSFER_SENT = "TRANSFER_SENT",
  TRANSFER_SENT_FAILED = "TRANSFER_SENT_FAILED",
}

export enum OSType {
  ANDROID = "ANDROID",
  CHROME_OS = "CHROME_OS",
  IOS = "IOS",
  LINUX = "LINUX",
  MAC = "MAC",
  UNKNOWN = "UNKNOWN",
  WINDOWS = "WINDOWS",
}

export enum OrganizationRole {
  ORG_ADMIN_USER = "ORG_ADMIN_USER",
  ORG_REGULAR_USER = "ORG_REGULAR_USER",
}

export enum OrganizationType {
  BUSINNESS = "BUSINNESS",
  EDUCATION = "EDUCATION",
  EVENT = "EVENT",
  GOVERNMENT = "GOVERNMENT",
}

export enum ParticipantState {
  APPROVED = "APPROVED",
  BANNED = "BANNED",
  WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL",
}

export enum ProjectApplicantState {
  ACCEPTED = "ACCEPTED",
  IN_REVIEW = "IN_REVIEW",
  REJECTED = "REJECTED",
}

export enum ProjectAuthorizations {
  CREATE_PROJECT = "CREATE_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT",
  UPDATE_PROJECT = "UPDATE_PROJECT",
}

export enum ProjectPositionState {
  ACTIVE = "ACTIVE",
  ASSIGNED = "ASSIGNED",
  DELETED = "DELETED",
}

export enum ProjectRole {
  ADMIN = "ADMIN",
  REGULAR_MEMBER = "REGULAR_MEMBER",
}

export enum ProjectState {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DRAFT = "DRAFT",
  NOT_ELIGIBLE = "NOT_ELIGIBLE",
  NOT_ELIGIBLE_DRAFT = "NOT_ELIGIBLE_DRAFT",
}

export enum ProjectVisibility {
  JURY = "JURY",
  MENTOR = "MENTOR",
  ORGANIZATION = "ORGANIZATION",
  PARTICIPANT = "PARTICIPANT",
  PUBLIC = "PUBLIC",
  REGULAR_USER = "REGULAR_USER",
}

export enum PublishDocType {
  CHALLENGE = "CHALLENGE",
  ORGANIZATION = "ORGANIZATION",
}

export enum PublishState {
  ACTIVE = "ACTIVE",
  BANNED = "BANNED",
  DRAFT = "DRAFT",
  IN_REVIEW = "IN_REVIEW",
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export enum QuestionType {
  DATE = "DATE",
  EMAIL = "EMAIL",
  FILE_UPLOAD = "FILE_UPLOAD",
  LONG_TEXT = "LONG_TEXT",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  NUMBER = "NUMBER",
  PHONE_NUMBER = "PHONE_NUMBER",
  SHORT_TEXT = "SHORT_TEXT",
  SINGLE_CHOICE = "SINGLE_CHOICE",
  STATEMENT = "STATEMENT",
  URL = "URL",
}

export enum RecipientState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  DELETED = "DELETED",
  SPAM = "SPAM",
}

export enum ReferralState {
  COMPLETED = "COMPLETED",
  EMAIL_SENT = "EMAIL_SENT",
  WAITING_ACCOUNT_VALIDATION = "WAITING_ACCOUNT_VALIDATION",
}

export enum StoryBlogSource {
  BEPRO = "BEPRO",
  TAIKAI = "TAIKAI",
}

export enum StoryState {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export enum ToguAction {
  ALLOCATE_KAI = "ALLOCATE_KAI",
  BACK_KAI = "BACK_KAI",
  CHANGE_CHALLENGE_STATE = "CHANGE_CHALLENGE_STATE",
  COLLECT_ALL_LEFTS = "COLLECT_ALL_LEFTS",
  COLLECT_AWARD = "COLLECT_AWARD",
  COLLECT_AWARDS = "COLLECT_AWARDS",
  COLLECT_LEFTS = "COLLECT_LEFTS",
  CREATE_ACCESS_TOKEN = "CREATE_ACCESS_TOKEN",
  DISTRIBUTE_DIVIDENDS = "DISTRIBUTE_DIVIDENDS",
  DIVIDEND_BACKER = "DIVIDEND_BACKER",
  DIVIDEND_MEMBER = "DIVIDEND_MEMBER",
  DIVIDEND_PROJECT = "DIVIDEND_PROJECT",
  EOS_INFO = "EOS_INFO",
  FUND_CHALLENGE = "FUND_CHALLENGE",
  ISSUE_KAI = "ISSUE_KAI",
  MINT_KAI = "MINT_KAI",
  SYNC_ORG_COUNTERS = "SYNC_ORG_COUNTERS",
  TRANSFER_KAI = "TRANSFER_KAI",
  USER_CREATE = "USER_CREATE",
  USER_DELETE = "USER_DELETE",
  USER_SHOW = "USER_SHOW",
  USER_UPDATE = "USER_UPDATE",
}

export enum TokenType {
  API_ACCESS_TOKEN = "API_ACCESS_TOKEN",
  CONFIRMATION_TOKEN = "CONFIRMATION_TOKEN",
  FACEBOOK_ACCESS_TOKEN = "FACEBOOK_ACCESS_TOKEN",
  GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN",
  RESET_PASSWORD_TOKEN = "RESET_PASSWORD_TOKEN",
  TOGU_ACCESS_TOKEN = "TOGU_ACCESS_TOKEN",
}

export enum TransactionStatus {
  CONFIRMED = "CONFIRMED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

export enum UserAuthType {
  EMAIL = "EMAIL",
  FACEBOOK = "FACEBOOK",
  GITHUB = "GITHUB",
  GOOGLE = "GOOGLE",
  LINKEDIN = "LINKEDIN",
  MICROSOFT = "MICROSOFT",
}

export enum UserPermissions {
  JURY = "JURY",
  PARTICIPANTS = "PARTICIPANTS",
  PARTICIPANTS_AND_JURY = "PARTICIPANTS_AND_JURY",
  PUBLIC = "PUBLIC",
  REGULAR_USER = "REGULAR_USER",
}

export enum UserRole {
  ADMIN = "ADMIN",
  REGULAR_USER = "REGULAR_USER",
  UNKNOW = "UNKNOW",
}

export enum UserState {
  BLOCKED = "BLOCKED",
  CONFIRMED = "CONFIRMED",
  DELETED = "DELETED",
  PASSWORD_RESET = "PASSWORD_RESET",
  UNCONFIRMED = "UNCONFIRMED",
}

export enum VideoOnDemandSource {
  VIMEO = "VIMEO",
  YOUTUBE = "YOUTUBE",
}

export enum VotingCartItemStatus {
  ACTIVE = "ACTIVE",
  FAILED = "FAILED",
  SUBMITTED = "SUBMITTED",
}

export enum VotingCartStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  SUBMITTED = "SUBMITTED",
}

export enum VotingScheme {
  CROWD = "CROWD",
  CROWD_AND_SELECTED = "CROWD_AND_SELECTED",
  NONE = "NONE",
  ORGANIZATION_AND_SELECTED = "ORGANIZATION_AND_SELECTED",
  SELECTED = "SELECTED",
}

export enum VotingType {
  CRITERIA = "CRITERIA",
  NONE = "NONE",
  TOKEN = "TOKEN",
}

export enum VoucherReddemStatus {
  DELETED = "DELETED",
  REDEEMED = "REDEEMED",
}

export enum VoucherStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
  INACTIVE = "INACTIVE",
}

export enum VoucherType {
  BACKER = "BACKER",
  GLOBAL_BALANCE = "GLOBAL_BALANCE",
}

export enum WalletType {
  ACCOUNT = "ACCOUNT",
  CHALLENGE = "CHALLENGE",
  CHALLENGE_AWARD = "CHALLENGE_AWARD",
  CHALLENGE_USER = "CHALLENGE_USER",
  PROJECT = "PROJECT",
  PROJECT_DIVIDEND = "PROJECT_DIVIDEND",
  USER = "USER",
}

export enum WebhookState {
  DELIVERED = "DELIVERED",
  DROPPED = "DROPPED",
  PENDING = "PENDING",
}

export enum WebhookType {
  CHALLENGE_CLOSED = "CHALLENGE_CLOSED",
  CHALLENGE_STEP_CHANGED = "CHALLENGE_STEP_CHANGED",
  CHALLENGE_UPDATE_PUBLISHED = "CHALLENGE_UPDATE_PUBLISHED",
  INVITE_TO_JURY_PARTICIPANT_REDEEMED = "INVITE_TO_JURY_PARTICIPANT_REDEEMED",
  INVITE_TO_JURY_REDEEMED = "INVITE_TO_JURY_REDEEMED",
  INVITE_TO_PARTICIPANT_REDEEMED = "INVITE_TO_PARTICIPANT_REDEEMED",
  NEW_FORM_SUBMISSION = "NEW_FORM_SUBMISSION",
  NEW_JURY = "NEW_JURY",
  NEW_PARTICIPANT = "NEW_PARTICIPANT",
  PROJECT_BACKED = "PROJECT_BACKED",
  PROJECT_PUBLISHED = "PROJECT_PUBLISHED",
  UPDATE_FORM_SUBMISSION = "UPDATE_FORM_SUBMISSION",
}

export interface AccountVerificationListRelationFilter {
  every?: AccountVerificationWhereInput | null;
  some?: AccountVerificationWhereInput | null;
  none?: AccountVerificationWhereInput | null;
}

export interface AccountVerificationWhereInput {
  AND?: AccountVerificationWhereInput[] | null;
  OR?: AccountVerificationWhereInput[] | null;
  NOT?: AccountVerificationWhereInput[] | null;
  id?: StringFilter | null;
  phoneNumber?: StringFilter | null;
  sentAt?: DateTimeFilter | null;
  status?: EnumAccountVerificationStatusFilter | null;
  count?: IntNullableFilter | null;
  finishedAt?: DateTimeNullableFilter | null;
  invalidatedAt?: DateTimeNullableFilter | null;
  expiresAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
}

export interface AccountWhereInput {
  AND?: AccountWhereInput[] | null;
  OR?: AccountWhereInput[] | null;
  NOT?: AccountWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  wallet?: WalletWhereInput | null;
  fromAccount?: TransactionWhereInput | null;
  toAccount?: TransactionWhereInput | null;
}

export interface BackerListRelationFilter {
  every?: BackerWhereInput | null;
  some?: BackerWhereInput | null;
  none?: BackerWhereInput | null;
}

export interface BackerWhereInput {
  AND?: BackerWhereInput[] | null;
  OR?: BackerWhereInput[] | null;
  NOT?: BackerWhereInput[] | null;
  id?: StringFilter | null;
  nrTransactions?: IntFilter | null;
  amount?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  projectId?: StringFilter | null;
  project?: ProjectWhereInput | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
}

export interface BoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface BoolNullableFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableFilter | null;
}

export interface ChallengeBalanceTableListRelationFilter {
  every?: ChallengeBalanceTableWhereInput | null;
  some?: ChallengeBalanceTableWhereInput | null;
  none?: ChallengeBalanceTableWhereInput | null;
}

export interface ChallengeBalanceTableWhereInput {
  AND?: ChallengeBalanceTableWhereInput[] | null;
  OR?: ChallengeBalanceTableWhereInput[] | null;
  NOT?: ChallengeBalanceTableWhereInput[] | null;
  id?: StringFilter | null;
  finalBalance?: IntFilter | null;
  position?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  projectId?: StringFilter | null;
  project?: ProjectWhereInput | null;
}

export interface ChallengeCategoryListRelationFilter {
  every?: ChallengeCategoryWhereInput | null;
  some?: ChallengeCategoryWhereInput | null;
  none?: ChallengeCategoryWhereInput | null;
}

export interface ChallengeCategoryWhereInput {
  AND?: ChallengeCategoryWhereInput[] | null;
  OR?: ChallengeCategoryWhereInput[] | null;
  NOT?: ChallengeCategoryWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  shortDescription?: StringNullableFilter | null;
  description?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  projects?: ProjectListRelationFilter | null;
}

export interface ChallengeListRelationFilter {
  every?: ChallengeWhereInput | null;
  some?: ChallengeWhereInput | null;
  none?: ChallengeWhereInput | null;
}

export interface ChallengeStatWhereInput {
  AND?: ChallengeStatWhereInput[] | null;
  OR?: ChallengeStatWhereInput[] | null;
  NOT?: ChallengeStatWhereInput[] | null;
  id?: StringFilter | null;
  totalFunded?: IntFilter | null;
  totalAllocated?: IntFilter | null;
  totalBacked?: IntFilter | null;
  totalCollected?: IntFilter | null;
  totalDividends?: IntFilter | null;
  totalProjectDividends?: IntFilter | null;
  openPositions?: IntNullableFilter | null;
  totalBackerDividends?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challenge?: ChallengeWhereInput | null;
}

export interface ChallengeStepListRelationFilter {
  every?: ChallengeStepWhereInput | null;
  some?: ChallengeStepWhereInput | null;
  none?: ChallengeStepWhereInput | null;
}

export interface ChallengeStepWhereInput {
  AND?: ChallengeStepWhereInput[] | null;
  OR?: ChallengeStepWhereInput[] | null;
  NOT?: ChallengeStepWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  startDate?: DateTimeFilter | null;
  votingScheme?: EnumVotingSchemeFilter | null;
  votingType?: EnumVotingTypeNullableFilter | null;
  numQualifiedProjects?: IntFilter | null;
  allocatedPercentage?: IntFilter | null;
  isCurrent?: BoolNullableFilter | null;
  isSecretVoting?: BoolNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  votingCriteriaGroupId?: StringNullableFilter | null;
  projectVisibility?: EnumProjectVisibilityNullableListFilter | null;
  projectAuthorizations?: EnumProjectAuthorizationsNullableListFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  votingCriteriaGroup?: VotingCriteriaGroupWhereInput | null;
  juries?: JuryListRelationFilter | null;
  votingCarts?: VotingCartListRelationFilter | null;
  invitesToJury?: InviteToJuryListRelationFilter | null;
  vouchers?: VoucherListRelationFilter | null;
  challengeCurrent?: ChallengeWhereInput | null;
}

export interface ChallengeTabListRelationFilter {
  every?: ChallengeTabWhereInput | null;
  some?: ChallengeTabWhereInput | null;
  none?: ChallengeTabWhereInput | null;
}

export interface ChallengeTabWhereInput {
  AND?: ChallengeTabWhereInput[] | null;
  OR?: ChallengeTabWhereInput[] | null;
  NOT?: ChallengeTabWhereInput[] | null;
  id?: StringFilter | null;
  icon?: StringNullableFilter | null;
  title?: StringFilter | null;
  order?: IntFilter | null;
  isEnabled?: BoolFilter | null;
  isDefault?: BoolFilter | null;
  type?: EnumChallengeTabTypeFilter | null;
  content?: StringFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface ChallengeUpdateListRelationFilter {
  every?: ChallengeUpdateWhereInput | null;
  some?: ChallengeUpdateWhereInput | null;
  none?: ChallengeUpdateWhereInput | null;
}

export interface ChallengeUpdateWhereInput {
  AND?: ChallengeUpdateWhereInput[] | null;
  OR?: ChallengeUpdateWhereInput[] | null;
  NOT?: ChallengeUpdateWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  content?: StringFilter | null;
  isPublished?: BoolNullableFilter | null;
  publishedAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  tags?: StringNullableListFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
}

export interface ChallengeWhereInput {
  AND?: ChallengeWhereInput[] | null;
  OR?: ChallengeWhereInput[] | null;
  NOT?: ChallengeWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumChallengeTypeFilter | null;
  name?: StringFilter | null;
  shortDescription?: StringFilter | null;
  description?: StringNullableFilter | null;
  prize?: IntFilter | null;
  prizeDecimals?: IntFilter | null;
  prizeCurrency?: EnumCurrencyFilter | null;
  slug?: StringFilter | null;
  keywords?: StringNullableFilter | null;
  prizes?: StringNullableFilter | null;
  moderateProjects?: BoolNullableFilter | null;
  participantsCount?: IntFilter | null;
  projectMembersCount?: IntNullableFilter | null;
  faq?: JsonNullableFilter | null;
  faqs?: StringNullableFilter | null;
  timeline?: StringNullableFilter | null;
  rules?: JsonNullableFilter | null;
  attachmentsDescription?: StringNullableFilter | null;
  termsAndConditions?: StringNullableFilter | null;
  projectsCount?: IntFilter | null;
  totalFunding?: IntNullableFilter | null;
  allowedParticipants?: EnumAllowedParticipantsFilter | null;
  isPublic?: BoolFilter | null;
  matchMakingEnabled?: BoolFilter | null;
  isFeatured?: BoolFilter | null;
  isAutoDistributed?: BoolNullableFilter | null;
  isClosed?: BoolFilter | null;
  order?: IntNullableFilter | null;
  metadata?: JsonNullableFilter | null;
  startParticipantRegistrationDate?: DateTimeNullableFilter | null;
  endParticipantRegistrationDate?: DateTimeNullableFilter | null;
  startBackerRegistrationDate?: DateTimeNullableFilter | null;
  endBackerRegistrationDate?: DateTimeNullableFilter | null;
  attachmentsVisibility?: EnumAttachmentsVisibilityNullableFilter | null;
  maxProjectsPerMember?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  participantFormType?: EnumFormTypeNullableFilter | null;
  participantTypeFormUrl?: StringNullableFilter | null;
  participantForm?: FormWhereInput | null;
  registrationDomainsWhiteList?: StringNullableListFilter | null;
  isParticipantFormUpdatable?: BoolFilter | null;
  participantFormId?: StringNullableFilter | null;
  backerFormType?: EnumFormTypeNullableFilter | null;
  backerTypeFormUrl?: StringNullableFilter | null;
  backerForm?: FormWhereInput | null;
  backerFormId?: StringNullableFilter | null;
  chatInviteUrl?: StringNullableFilter | null;
  projectTemplate?: StringNullableFilter | null;
  customLinks?: JsonNullableFilter | null;
  organizationId?: StringFilter | null;
  statsId?: StringNullableFilter | null;
  cardImageFileId?: StringNullableFilter | null;
  coverImageFileId?: StringNullableFilter | null;
  logoImageFileId?: StringNullableFilter | null;
  momentTimeZoneId?: StringNullableFilter | null;
  currentStepId?: StringNullableFilter | null;
  authorId?: StringFilter | null;
  treasuryId?: StringFilter | null;
  organization?: OrganizationWhereInput | null;
  stats?: ChallengeStatWhereInput | null;
  scoreTable?: ChallengeBalanceTableListRelationFilter | null;
  categories?: ChallengeCategoryListRelationFilter | null;
  steps?: ChallengeStepListRelationFilter | null;
  updates?: ChallengeUpdateListRelationFilter | null;
  customChallengeTabs?: CustomChallengeTabListRelationFilter | null;
  tabs?: ChallengeTabListRelationFilter | null;
  dividends?: DividendListRelationFilter | null;
  stages?: LiveStageListRelationFilter | null;
  stageEvents?: LiveStageEventListRelationFilter | null;
  mentors?: MentorListRelationFilter | null;
  participants?: ParticipantListRelationFilter | null;
  projects?: ProjectListRelationFilter | null;
  publishInfo?: PublishInfoWhereInput | null;
  sponsors?: SponsorListRelationFilter | null;
  vods?: VideoOnDemandListRelationFilter | null;
  votingCriteriaGroups?: VotingCriteriaGroupListRelationFilter | null;
  attachments?: FileListRelationFilter | null;
  cardImageFile?: FileWhereInput | null;
  coverImageFile?: FileWhereInput | null;
  logoImageFile?: FileWhereInput | null;
  industries?: IndustryListRelationFilter | null;
  invitesToJury?: InviteToJuryListRelationFilter | null;
  invitesToMentor?: InviteToMentorListRelationFilter | null;
  invitesToParticipant?: InviteToParticipantListRelationFilter | null;
  juries?: JuryListRelationFilter | null;
  mailthreads?: MailThreadListRelationFilter | null;
  Notification?: NotificationListRelationFilter | null;
  privateConfiguration?: PrivateChallengeConfigurationWhereInput | null;
  ProjectRegistration?: ProjectRegistrationListRelationFilter | null;
  tags?: TechnicalSkillListRelationFilter | null;
  momentTimeZone?: MomentTimeZoneWhereInput | null;
  author?: UserWhereInput | null;
  treasury?: TreasuryWhereInput | null;
  vouchers?: VoucherListRelationFilter | null;
  wallets?: WalletListRelationFilter | null;
  webhookCalls?: WebhookCallListRelationFilter | null;
  transactions?: TransactionListRelationFilter | null;
  currentStep?: ChallengeStepWhereInput | null;
  hiringSteps?: HiringStepListRelationFilter | null;
  disableAnalytics?: BoolFilter | null;
  enableProjectTags?: BoolFilter | null;
  enableParticipantTags?: BoolFilter | null;
  projectTagsOptions?: StringNullableListFilter | null;
  participantTagsOptions?: StringNullableListFilter | null;
  maxMembersPerProject?: IntFilter | null;
  cappedMinters?: SkewedCappedMinterListRelationFilter | null;
}

export interface CustomChallengeTabListRelationFilter {
  every?: CustomChallengeTabWhereInput | null;
  some?: CustomChallengeTabWhereInput | null;
  none?: CustomChallengeTabWhereInput | null;
}

export interface CustomChallengeTabWhereInput {
  AND?: CustomChallengeTabWhereInput[] | null;
  OR?: CustomChallengeTabWhereInput[] | null;
  NOT?: CustomChallengeTabWhereInput[] | null;
  id?: StringFilter | null;
  icon?: StringNullableFilter | null;
  title?: StringFilter | null;
  content?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface DateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface DividendListRelationFilter {
  every?: DividendWhereInput | null;
  some?: DividendWhereInput | null;
  none?: DividendWhereInput | null;
}

export interface DividendWhereInput {
  AND?: DividendWhereInput[] | null;
  OR?: DividendWhereInput[] | null;
  NOT?: DividendWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumDividendTypeFilter | null;
  accountingBalance?: IntFilter | null;
  balance?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringNullableFilter | null;
  projectId?: StringNullableFilter | null;
  userId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  project?: ProjectWhereInput | null;
  user?: UserWhereInput | null;
}

export interface EmailStatusListRelationFilter {
  every?: EmailStatusWhereInput | null;
  some?: EmailStatusWhereInput | null;
  none?: EmailStatusWhereInput | null;
}

export interface EmailStatusWhereInput {
  AND?: EmailStatusWhereInput[] | null;
  OR?: EmailStatusWhereInput[] | null;
  NOT?: EmailStatusWhereInput[] | null;
  id?: StringFilter | null;
  from?: StringNullableFilter | null;
  to?: StringNullableFilter | null;
  inviteId?: StringFilter | null;
  status?: EnumDeliveryStatusFilter | null;
  processedAt?: DateTimeNullableFilter | null;
  deliveredAt?: DateTimeNullableFilter | null;
  droppedAt?: DateTimeNullableFilter | null;
  dropReason?: StringNullableFilter | null;
  openCount?: IntFilter | null;
  clickCount?: IntFilter | null;
  isMarkedAsSpam?: BoolFilter | null;
  type?: EnumEmailStatusTypeFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  inviteToJuryId?: StringNullableFilter | null;
  inviteToMentorId?: StringNullableFilter | null;
  inviteToOrganizationId?: StringNullableFilter | null;
  inviteToParticipantId?: StringNullableFilter | null;
  tokenId?: StringNullableFilter | null;
  inviteToJury?: InviteToJuryWhereInput | null;
  inviteToMentor?: InviteToMentorWhereInput | null;
  inviteToOrganization?: InviteToOrganizationWhereInput | null;
  inviteToParticipant?: InviteToParticipantWhereInput | null;
  token?: TokenWhereInput | null;
}

export interface EnumAccessTokenActionNullableListFilter {
  equals?: AccessTokenAction[] | null;
  has?: AccessTokenAction | null;
  hasEvery?: AccessTokenAction[] | null;
  hasSome?: AccessTokenAction[] | null;
  isEmpty?: boolean | null;
}

export interface EnumAccountVerificationStatusFilter {
  equals?: AccountVerificationStatus | null;
  in?: AccountVerificationStatus[] | null;
  notIn?: AccountVerificationStatus[] | null;
  not?: NestedEnumAccountVerificationStatusFilter | null;
}

export interface EnumAllowedParticipantsFilter {
  equals?: AllowedParticipants | null;
  in?: AllowedParticipants[] | null;
  notIn?: AllowedParticipants[] | null;
  not?: NestedEnumAllowedParticipantsFilter | null;
}

export interface EnumAssessResultNullableFilter {
  equals?: AssessResult | null;
  in?: AssessResult[] | null;
  notIn?: AssessResult[] | null;
  not?: NestedEnumAssessResultNullableFilter | null;
}

export interface EnumAttachmentsVisibilityNullableFilter {
  equals?: AttachmentsVisibility | null;
  in?: AttachmentsVisibility[] | null;
  notIn?: AttachmentsVisibility[] | null;
  not?: NestedEnumAttachmentsVisibilityNullableFilter | null;
}

export interface EnumBrowserTypeNullableFilter {
  equals?: BrowserType | null;
  in?: BrowserType[] | null;
  notIn?: BrowserType[] | null;
  not?: NestedEnumBrowserTypeNullableFilter | null;
}

export interface EnumCappedMinterTypeFilter {
  equals?: CappedMinterType | null;
  in?: CappedMinterType[] | null;
  notIn?: CappedMinterType[] | null;
  not?: NestedEnumCappedMinterTypeFilter | null;
}

export interface EnumChallengeTabTypeFilter {
  equals?: ChallengeTabType | null;
  in?: ChallengeTabType[] | null;
  notIn?: ChallengeTabType[] | null;
  not?: NestedEnumChallengeTabTypeFilter | null;
}

export interface EnumChallengeTypeFilter {
  equals?: ChallengeType | null;
  in?: ChallengeType[] | null;
  notIn?: ChallengeType[] | null;
  not?: NestedEnumChallengeTypeFilter | null;
}

export interface EnumCurrencyFilter {
  equals?: Currency | null;
  in?: Currency[] | null;
  notIn?: Currency[] | null;
  not?: NestedEnumCurrencyFilter | null;
}

export interface EnumDeliveryStatusFilter {
  equals?: DeliveryStatus | null;
  in?: DeliveryStatus[] | null;
  notIn?: DeliveryStatus[] | null;
  not?: NestedEnumDeliveryStatusFilter | null;
}

export interface EnumDeviceTypeNullableFilter {
  equals?: DeviceType | null;
  in?: DeviceType[] | null;
  notIn?: DeviceType[] | null;
  not?: NestedEnumDeviceTypeNullableFilter | null;
}

export interface EnumDividendTypeFilter {
  equals?: DividendType | null;
  in?: DividendType[] | null;
  notIn?: DividendType[] | null;
  not?: NestedEnumDividendTypeFilter | null;
}

export interface EnumEmailStatusTypeFilter {
  equals?: EmailStatusType | null;
  in?: EmailStatusType[] | null;
  notIn?: EmailStatusType[] | null;
  not?: NestedEnumEmailStatusTypeFilter | null;
}

export interface EnumEvaluationTypeFilter {
  equals?: EvaluationType | null;
  in?: EvaluationType[] | null;
  notIn?: EvaluationType[] | null;
  not?: NestedEnumEvaluationTypeFilter | null;
}

export interface EnumFeatureNullableListFilter {
  equals?: Feature[] | null;
  has?: Feature | null;
  hasEvery?: Feature[] | null;
  hasSome?: Feature[] | null;
  isEmpty?: boolean | null;
}

export interface EnumFormHookTypeFilter {
  equals?: FormHookType | null;
  in?: FormHookType[] | null;
  notIn?: FormHookType[] | null;
  not?: NestedEnumFormHookTypeFilter | null;
}

export interface EnumFormOwnerTypeFilter {
  equals?: FormOwnerType | null;
  in?: FormOwnerType[] | null;
  notIn?: FormOwnerType[] | null;
  not?: NestedEnumFormOwnerTypeFilter | null;
}

export interface EnumFormTypeNullableFilter {
  equals?: FormType | null;
  in?: FormType[] | null;
  notIn?: FormType[] | null;
  not?: NestedEnumFormTypeNullableFilter | null;
}

export interface EnumGenderNullableFilter {
  equals?: Gender | null;
  in?: Gender[] | null;
  notIn?: Gender[] | null;
  not?: NestedEnumGenderNullableFilter | null;
}

export interface EnumIdentityVerificationStatusFilter {
  equals?: IdentityVerificationStatus | null;
  in?: IdentityVerificationStatus[] | null;
  notIn?: IdentityVerificationStatus[] | null;
  not?: NestedEnumIdentityVerificationStatusFilter | null;
}

export interface EnumInviteStateNullableFilter {
  equals?: InviteState | null;
  in?: InviteState[] | null;
  notIn?: InviteState[] | null;
  not?: NestedEnumInviteStateNullableFilter | null;
}

export interface EnumInviteToProjectStateFilter {
  equals?: InviteToProjectState | null;
  in?: InviteToProjectState[] | null;
  notIn?: InviteToProjectState[] | null;
  not?: NestedEnumInviteToProjectStateFilter | null;
}

export interface EnumInviteTypeNullableFilter {
  equals?: InviteType | null;
  in?: InviteType[] | null;
  notIn?: InviteType[] | null;
  not?: NestedEnumInviteTypeNullableFilter | null;
}

export interface EnumJuryTypeFilter {
  equals?: JuryType | null;
  in?: JuryType[] | null;
  notIn?: JuryType[] | null;
  not?: NestedEnumJuryTypeFilter | null;
}

export interface EnumMailThreadTypeFilter {
  equals?: MailThreadType | null;
  in?: MailThreadType[] | null;
  notIn?: MailThreadType[] | null;
  not?: NestedEnumMailThreadTypeFilter | null;
}

export interface EnumMuxAssetStatusFilter {
  equals?: MuxAssetStatus | null;
  in?: MuxAssetStatus[] | null;
  notIn?: MuxAssetStatus[] | null;
  not?: NestedEnumMuxAssetStatusFilter | null;
}

export interface EnumMuxLiveStreamStatusFilter {
  equals?: MuxLiveStreamStatus | null;
  in?: MuxLiveStreamStatus[] | null;
  notIn?: MuxLiveStreamStatus[] | null;
  not?: NestedEnumMuxLiveStreamStatusFilter | null;
}

export interface EnumNotificationTypeFilter {
  equals?: NotificationType | null;
  in?: NotificationType[] | null;
  notIn?: NotificationType[] | null;
  not?: NestedEnumNotificationTypeFilter | null;
}

export interface EnumOSTypeNullableFilter {
  equals?: OSType | null;
  in?: OSType[] | null;
  notIn?: OSType[] | null;
  not?: NestedEnumOSTypeNullableFilter | null;
}

export interface EnumOrganizationRoleFilter {
  equals?: OrganizationRole | null;
  in?: OrganizationRole[] | null;
  notIn?: OrganizationRole[] | null;
  not?: NestedEnumOrganizationRoleFilter | null;
}

export interface EnumOrganizationRoleNullableFilter {
  equals?: OrganizationRole | null;
  in?: OrganizationRole[] | null;
  notIn?: OrganizationRole[] | null;
  not?: NestedEnumOrganizationRoleNullableFilter | null;
}

export interface EnumOrganizationTypeNullableFilter {
  equals?: OrganizationType | null;
  in?: OrganizationType[] | null;
  notIn?: OrganizationType[] | null;
  not?: NestedEnumOrganizationTypeNullableFilter | null;
}

export interface EnumParticipantStateNullableFilter {
  equals?: ParticipantState | null;
  in?: ParticipantState[] | null;
  notIn?: ParticipantState[] | null;
  not?: NestedEnumParticipantStateNullableFilter | null;
}

export interface EnumProjectApplicantStateFilter {
  equals?: ProjectApplicantState | null;
  in?: ProjectApplicantState[] | null;
  notIn?: ProjectApplicantState[] | null;
  not?: NestedEnumProjectApplicantStateFilter | null;
}

export interface EnumProjectAuthorizationsNullableListFilter {
  equals?: ProjectAuthorizations[] | null;
  has?: ProjectAuthorizations | null;
  hasEvery?: ProjectAuthorizations[] | null;
  hasSome?: ProjectAuthorizations[] | null;
  isEmpty?: boolean | null;
}

export interface EnumProjectPositionStateFilter {
  equals?: ProjectPositionState | null;
  in?: ProjectPositionState[] | null;
  notIn?: ProjectPositionState[] | null;
  not?: NestedEnumProjectPositionStateFilter | null;
}

export interface EnumProjectRoleFilter {
  equals?: ProjectRole | null;
  in?: ProjectRole[] | null;
  notIn?: ProjectRole[] | null;
  not?: NestedEnumProjectRoleFilter | null;
}

export interface EnumProjectStateNullableFilter {
  equals?: ProjectState | null;
  in?: ProjectState[] | null;
  notIn?: ProjectState[] | null;
  not?: NestedEnumProjectStateNullableFilter | null;
}

export interface EnumProjectVisibilityNullableListFilter {
  equals?: ProjectVisibility[] | null;
  has?: ProjectVisibility | null;
  hasEvery?: ProjectVisibility[] | null;
  hasSome?: ProjectVisibility[] | null;
  isEmpty?: boolean | null;
}

export interface EnumPublishDocTypeNullableFilter {
  equals?: PublishDocType | null;
  in?: PublishDocType[] | null;
  notIn?: PublishDocType[] | null;
  not?: NestedEnumPublishDocTypeNullableFilter | null;
}

export interface EnumPublishStateNullableFilter {
  equals?: PublishState | null;
  in?: PublishState[] | null;
  notIn?: PublishState[] | null;
  not?: NestedEnumPublishStateNullableFilter | null;
}

export interface EnumQuestionTypeFilter {
  equals?: QuestionType | null;
  in?: QuestionType[] | null;
  notIn?: QuestionType[] | null;
  not?: NestedEnumQuestionTypeFilter | null;
}

export interface EnumRecipientStateFilter {
  equals?: RecipientState | null;
  in?: RecipientState[] | null;
  notIn?: RecipientState[] | null;
  not?: NestedEnumRecipientStateFilter | null;
}

export interface EnumReferralStateFilter {
  equals?: ReferralState | null;
  in?: ReferralState[] | null;
  notIn?: ReferralState[] | null;
  not?: NestedEnumReferralStateFilter | null;
}

export interface EnumStoryBlogSourceFilter {
  equals?: StoryBlogSource | null;
  in?: StoryBlogSource[] | null;
  notIn?: StoryBlogSource[] | null;
  not?: StoryBlogSource | null;
}

export interface EnumStoryStateNullableFilter {
  equals?: StoryState | null;
  in?: StoryState[] | null;
  notIn?: StoryState[] | null;
  not?: NestedEnumStoryStateNullableFilter | null;
}

export interface EnumToguActionNullableListFilter {
  equals?: ToguAction[] | null;
  has?: ToguAction | null;
  hasEvery?: ToguAction[] | null;
  hasSome?: ToguAction[] | null;
  isEmpty?: boolean | null;
}

export interface EnumTokenTypeFilter {
  equals?: TokenType | null;
  in?: TokenType[] | null;
  notIn?: TokenType[] | null;
  not?: NestedEnumTokenTypeFilter | null;
}

export interface EnumTransactionStatusFilter {
  equals?: TransactionStatus | null;
  in?: TransactionStatus[] | null;
  notIn?: TransactionStatus[] | null;
  not?: NestedEnumTransactionStatusFilter | null;
}

export interface EnumUserAuthTypeFilter {
  equals?: UserAuthType | null;
  in?: UserAuthType[] | null;
  notIn?: UserAuthType[] | null;
  not?: NestedEnumUserAuthTypeFilter | null;
}

export interface EnumUserPermissionsNullableFilter {
  equals?: UserPermissions | null;
  in?: UserPermissions[] | null;
  notIn?: UserPermissions[] | null;
  not?: NestedEnumUserPermissionsNullableFilter | null;
}

export interface EnumUserRoleFilter {
  equals?: UserRole | null;
  in?: UserRole[] | null;
  notIn?: UserRole[] | null;
  not?: NestedEnumUserRoleFilter | null;
}

export interface EnumUserStateFilter {
  equals?: UserState | null;
  in?: UserState[] | null;
  notIn?: UserState[] | null;
  not?: NestedEnumUserStateFilter | null;
}

export interface EnumVideoOnDemandSourceFilter {
  equals?: VideoOnDemandSource | null;
  in?: VideoOnDemandSource[] | null;
  notIn?: VideoOnDemandSource[] | null;
  not?: NestedEnumVideoOnDemandSourceFilter | null;
}

export interface EnumVotingCartItemStatusNullableFilter {
  equals?: VotingCartItemStatus | null;
  in?: VotingCartItemStatus[] | null;
  notIn?: VotingCartItemStatus[] | null;
  not?: NestedEnumVotingCartItemStatusNullableFilter | null;
}

export interface EnumVotingCartStatusFilter {
  equals?: VotingCartStatus | null;
  in?: VotingCartStatus[] | null;
  notIn?: VotingCartStatus[] | null;
  not?: NestedEnumVotingCartStatusFilter | null;
}

export interface EnumVotingSchemeFilter {
  equals?: VotingScheme | null;
  in?: VotingScheme[] | null;
  notIn?: VotingScheme[] | null;
  not?: NestedEnumVotingSchemeFilter | null;
}

export interface EnumVotingTypeNullableFilter {
  equals?: VotingType | null;
  in?: VotingType[] | null;
  notIn?: VotingType[] | null;
  not?: NestedEnumVotingTypeNullableFilter | null;
}

export interface EnumVoucherReddemStatusFilter {
  equals?: VoucherReddemStatus | null;
  in?: VoucherReddemStatus[] | null;
  notIn?: VoucherReddemStatus[] | null;
  not?: NestedEnumVoucherReddemStatusFilter | null;
}

export interface EnumVoucherStatusFilter {
  equals?: VoucherStatus | null;
  in?: VoucherStatus[] | null;
  notIn?: VoucherStatus[] | null;
  not?: NestedEnumVoucherStatusFilter | null;
}

export interface EnumVoucherTypeFilter {
  equals?: VoucherType | null;
  in?: VoucherType[] | null;
  notIn?: VoucherType[] | null;
  not?: NestedEnumVoucherTypeFilter | null;
}

export interface EnumWalletTypeFilter {
  equals?: WalletType | null;
  in?: WalletType[] | null;
  notIn?: WalletType[] | null;
  not?: NestedEnumWalletTypeFilter | null;
}

export interface EnumWebhookStateFilter {
  equals?: WebhookState | null;
  in?: WebhookState[] | null;
  notIn?: WebhookState[] | null;
  not?: NestedEnumWebhookStateFilter | null;
}

export interface EnumWebhookTypeFilter {
  equals?: WebhookType | null;
  in?: WebhookType[] | null;
  notIn?: WebhookType[] | null;
  not?: NestedEnumWebhookTypeFilter | null;
}

export interface FileListRelationFilter {
  every?: FileWhereInput | null;
  some?: FileWhereInput | null;
  none?: FileWhereInput | null;
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | null;
  OR?: FileWhereInput[] | null;
  NOT?: FileWhereInput[] | null;
  id?: StringFilter | null;
  url?: StringFilter | null;
  thumbUrl?: StringNullableFilter | null;
  originalFileName?: StringFilter | null;
  name?: StringFilter | null;
  mimetype?: StringFilter | null;
  encoding?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  metadata?: JsonNullableFilter | null;
  updatedAt?: DateTimeFilter | null;
  liveStageEvent?: LiveStageEventWhereInput | null;
  challenge?: ChallengeListRelationFilter | null;
  challengeCardImage?: ChallengeWhereInput | null;
  challengeCoverImage?: ChallengeWhereInput | null;
  challengeLogoImage?: ChallengeWhereInput | null;
  notification?: NotificationListRelationFilter | null;
  story?: StoryWhereInput | null;
  identityVerificationBack?: IdentityVerificationWhereInput | null;
  identityVerificationFront?: IdentityVerificationWhereInput | null;
  identityVerificationProofOfAddress?: IdentityVerificationWhereInput | null;
  IdentityVerificationSelfie?: IdentityVerificationWhereInput | null;
  organizationCardImage?: OrganizationWhereInput | null;
  organizationCoverImage?: OrganizationWhereInput | null;
  organizationLogoImage?: OrganizationWhereInput | null;
  projectCardImage?: ProjectWhereInput | null;
  projectCoverImage?: ProjectWhereInput | null;
  project?: ProjectListRelationFilter | null;
  projectLogo?: ProjectWhereInput | null;
  userCoverFileImages?: UserWhereInput | null;
  userPhotoFileImages?: UserWhereInput | null;
  formAnswer?: FormAnswerWhereInput | null;
  participantId?: StringNullableFilter | null;
  participant?: ParticipantWhereInput | null;
}

export interface FloatFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatFilter | null;
}

export interface FloatNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatNullableFilter | null;
}

export interface FormAnswerListRelationFilter {
  every?: FormAnswerWhereInput | null;
  some?: FormAnswerWhereInput | null;
  none?: FormAnswerWhereInput | null;
}

export interface FormAnswerWhereInput {
  AND?: FormAnswerWhereInput[] | null;
  OR?: FormAnswerWhereInput[] | null;
  NOT?: FormAnswerWhereInput[] | null;
  id?: StringFilter | null;
  shortText?: StringNullableFilter | null;
  longText?: StringNullableFilter | null;
  email?: StringNullableFilter | null;
  phoneNumber?: StringNullableFilter | null;
  multipleChoice?: StringNullableListFilter | null;
  singleChoice?: StringNullableFilter | null;
  fileId?: StringNullableFilter | null;
  file?: FileWhereInput | null;
  date?: DateTimeNullableFilter | null;
  number?: FloatNullableFilter | null;
  url?: StringNullableFilter | null;
  questionID?: StringFilter | null;
  question?: FormQuestionWhereInput | null;
  formSubmissionId?: StringFilter | null;
  formSubmission?: FormSubmissionWhereInput | null;
}

export interface FormHookListRelationFilter {
  every?: FormHookWhereInput | null;
  some?: FormHookWhereInput | null;
  none?: FormHookWhereInput | null;
}

export interface FormHookWhereInput {
  AND?: FormHookWhereInput[] | null;
  OR?: FormHookWhereInput[] | null;
  NOT?: FormHookWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumFormHookTypeFilter | null;
  context?: JsonFilter | null;
  formId?: StringFilter | null;
  form?: FormWhereInput | null;
}

export interface FormOwnerListRelationFilter {
  every?: FormOwnerWhereInput | null;
  some?: FormOwnerWhereInput | null;
  none?: FormOwnerWhereInput | null;
}

export interface FormOwnerWhereInput {
  AND?: FormOwnerWhereInput[] | null;
  OR?: FormOwnerWhereInput[] | null;
  NOT?: FormOwnerWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumFormOwnerTypeFilter | null;
  organizationId?: StringNullableFilter | null;
  organization?: OrganizationWhereInput | null;
  user?: UserWhereInput | null;
  userId?: StringNullableFilter | null;
  form?: FormWhereInput | null;
}

export interface FormQuestionListRelationFilter {
  every?: FormQuestionWhereInput | null;
  some?: FormQuestionWhereInput | null;
  none?: FormQuestionWhereInput | null;
}

export interface FormQuestionWhereInput {
  AND?: FormQuestionWhereInput[] | null;
  OR?: FormQuestionWhereInput[] | null;
  NOT?: FormQuestionWhereInput[] | null;
  id?: StringFilter | null;
  reference?: StringNullableFilter | null;
  isRequired?: BoolFilter | null;
  title?: StringFilter | null;
  description?: StringNullableFilter | null;
  maxCharacters?: IntNullableFilter | null;
  type?: EnumQuestionTypeFilter | null;
  choices?: StringNullableListFilter | null;
  formId?: StringNullableFilter | null;
  form?: FormWhereInput | null;
  order?: IntFilter | null;
  answers?: FormAnswerListRelationFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface FormSubmissionListRelationFilter {
  every?: FormSubmissionWhereInput | null;
  some?: FormSubmissionWhereInput | null;
  none?: FormSubmissionWhereInput | null;
}

export interface FormSubmissionWhereInput {
  AND?: FormSubmissionWhereInput[] | null;
  OR?: FormSubmissionWhereInput[] | null;
  NOT?: FormSubmissionWhereInput[] | null;
  id?: StringFilter | null;
  formId?: StringFilter | null;
  form?: FormWhereInput | null;
  answers?: FormAnswerListRelationFilter | null;
  user?: UserWhereInput | null;
  userId?: StringNullableFilter | null;
  participant?: ParticipantWhereInput | null;
  metadata?: JsonNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface FormWhereInput {
  AND?: FormWhereInput[] | null;
  OR?: FormWhereInput[] | null;
  NOT?: FormWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  hooks?: FormHookListRelationFilter | null;
  questions?: FormQuestionListRelationFilter | null;
  submissions?: FormSubmissionListRelationFilter | null;
  isPublic?: BoolFilter | null;
  ownerId?: StringFilter | null;
  owner?: FormOwnerWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  participantChallenge?: ChallengeWhereInput | null;
  backerChallenge?: ChallengeWhereInput | null;
  webhookCalls?: WebhookCallListRelationFilter | null;
}

export interface HiringCommentListRelationFilter {
  every?: HiringCommentWhereInput | null;
  some?: HiringCommentWhereInput | null;
  none?: HiringCommentWhereInput | null;
}

export interface HiringCommentWhereInput {
  AND?: HiringCommentWhereInput[] | null;
  OR?: HiringCommentWhereInput[] | null;
  NOT?: HiringCommentWhereInput[] | null;
  id?: StringFilter | null;
  content?: StringFilter | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
  participantId?: StringFilter | null;
  participant?: ParticipantWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface HiringStepListRelationFilter {
  every?: HiringStepWhereInput | null;
  some?: HiringStepWhereInput | null;
  none?: HiringStepWhereInput | null;
}

export interface HiringStepWhereInput {
  AND?: HiringStepWhereInput[] | null;
  OR?: HiringStepWhereInput[] | null;
  NOT?: HiringStepWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  description?: StringNullableFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  canCreateProject?: BoolFilter | null;
  hoursToComplete?: IntFilter | null;
  jury?: JuryListRelationFilter | null;
  invitesToJury?: InviteToJuryListRelationFilter | null;
  passEmail?: StringNullableFilter | null;
  rejectEmail?: StringNullableFilter | null;
  evaluationType?: EnumEvaluationTypeFilter | null;
  votingCriteriaGroupId?: StringNullableFilter | null;
  isLastStep?: BoolFilter | null;
  isRejected?: BoolFilter | null;
  votingCriteriaGroup?: VotingCriteriaGroupWhereInput | null;
  order?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  participants?: ParticipantListRelationFilter | null;
  carts?: VotingCartListRelationFilter | null;
  votingResumes?: VotingResumeListRelationFilter | null;
}

export interface IdentityVerificationWhereInput {
  AND?: IdentityVerificationWhereInput[] | null;
  OR?: IdentityVerificationWhereInput[] | null;
  NOT?: IdentityVerificationWhereInput[] | null;
  id?: StringFilter | null;
  status?: EnumIdentityVerificationStatusFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  User?: UserWhereInput | null;
  idFrontImageId?: StringNullableFilter | null;
  idBackImageId?: StringNullableFilter | null;
  proofOfAddressId?: StringNullableFilter | null;
  selfieImageId?: StringNullableFilter | null;
  idFrontImage?: FileWhereInput | null;
  idBackImage?: FileWhereInput | null;
  proofOfAddress?: FileWhereInput | null;
  selfieImage?: FileWhereInput | null;
}

export interface IndustryListRelationFilter {
  every?: IndustryWhereInput | null;
  some?: IndustryWhereInput | null;
  none?: IndustryWhereInput | null;
}

export interface IndustryWhereInput {
  AND?: IndustryWhereInput[] | null;
  OR?: IndustryWhereInput[] | null;
  NOT?: IndustryWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  title_br?: StringNullableFilter | null;
  description?: StringNullableFilter | null;
  description_br?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challenges?: ChallengeListRelationFilter | null;
  organizations?: OrganizationListRelationFilter | null;
}

export interface IntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface IntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntNullableFilter | null;
}

export interface InviteToJuryListRelationFilter {
  every?: InviteToJuryWhereInput | null;
  some?: InviteToJuryWhereInput | null;
  none?: InviteToJuryWhereInput | null;
}

export interface InviteToJuryWhereInput {
  AND?: InviteToJuryWhereInput[] | null;
  OR?: InviteToJuryWhereInput[] | null;
  NOT?: InviteToJuryWhereInput[] | null;
  id?: StringFilter | null;
  kind?: EnumInviteTypeNullableFilter | null;
  expiresAt?: DateTimeFilter | null;
  redeemedAt?: DateTimeNullableFilter | null;
  token?: StringFilter | null;
  type?: EnumJuryTypeFilter | null;
  toEmail?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  state?: EnumInviteStateNullableFilter | null;
  url?: StringNullableFilter | null;
  updatedAt?: DateTimeFilter | null;
  fromId?: StringFilter | null;
  toId?: StringNullableFilter | null;
  challengeId?: StringFilter | null;
  challengeStepId?: StringNullableFilter | null;
  emailStatuses?: EmailStatusListRelationFilter | null;
  from?: UserWhereInput | null;
  to?: UserWhereInput | null;
  challengeStep?: ChallengeStepWhereInput | null;
  challenge?: ChallengeWhereInput | null;
  hiringStepId?: StringNullableFilter | null;
  hiringStep?: HiringStepWhereInput | null;
  webHookCalls?: WebhookCallListRelationFilter | null;
  balanceToAllocate?: IntFilter | null;
}

export interface InviteToMentorListRelationFilter {
  every?: InviteToMentorWhereInput | null;
  some?: InviteToMentorWhereInput | null;
  none?: InviteToMentorWhereInput | null;
}

export interface InviteToMentorWhereInput {
  AND?: InviteToMentorWhereInput[] | null;
  OR?: InviteToMentorWhereInput[] | null;
  NOT?: InviteToMentorWhereInput[] | null;
  id?: StringFilter | null;
  kind?: EnumInviteTypeNullableFilter | null;
  expiresAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  redeemedAt?: DateTimeNullableFilter | null;
  token?: StringFilter | null;
  toEmail?: StringNullableFilter | null;
  state?: EnumInviteStateNullableFilter | null;
  url?: StringNullableFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  fromId?: StringFilter | null;
  toId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  emailStatuses?: EmailStatusListRelationFilter | null;
  from?: UserWhereInput | null;
  to?: UserWhereInput | null;
}

export interface InviteToOrganizationListRelationFilter {
  every?: InviteToOrganizationWhereInput | null;
  some?: InviteToOrganizationWhereInput | null;
  none?: InviteToOrganizationWhereInput | null;
}

export interface InviteToOrganizationWhereInput {
  AND?: InviteToOrganizationWhereInput[] | null;
  OR?: InviteToOrganizationWhereInput[] | null;
  NOT?: InviteToOrganizationWhereInput[] | null;
  id?: StringFilter | null;
  expiresAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  redeemedAt?: DateTimeNullableFilter | null;
  token?: StringFilter | null;
  role?: EnumOrganizationRoleNullableFilter | null;
  toEmail?: StringNullableFilter | null;
  state?: EnumInviteStateNullableFilter | null;
  updatedAt?: DateTimeFilter | null;
  fromId?: StringFilter | null;
  toId?: StringNullableFilter | null;
  organizationId?: StringFilter | null;
  emailStatuses?: EmailStatusListRelationFilter | null;
  from?: UserWhereInput | null;
  to?: UserWhereInput | null;
  organization?: OrganizationWhereInput | null;
}

export interface InviteToParticipantListRelationFilter {
  every?: InviteToParticipantWhereInput | null;
  some?: InviteToParticipantWhereInput | null;
  none?: InviteToParticipantWhereInput | null;
}

export interface InviteToParticipantWhereInput {
  AND?: InviteToParticipantWhereInput[] | null;
  OR?: InviteToParticipantWhereInput[] | null;
  NOT?: InviteToParticipantWhereInput[] | null;
  id?: StringFilter | null;
  kind?: EnumInviteTypeNullableFilter | null;
  expiresAt?: DateTimeFilter | null;
  redeemedAt?: DateTimeNullableFilter | null;
  token?: StringFilter | null;
  toEmail?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  state?: EnumInviteStateNullableFilter | null;
  url?: StringNullableFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  fromId?: StringFilter | null;
  toId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  emailStatuses?: EmailStatusListRelationFilter | null;
  from?: UserWhereInput | null;
  to?: UserWhereInput | null;
  WebhookCall?: WebhookCallListRelationFilter | null;
}

export interface InviteToProjectListRelationFilter {
  every?: InviteToProjectWhereInput | null;
  some?: InviteToProjectWhereInput | null;
  none?: InviteToProjectWhereInput | null;
}

export interface InviteToProjectWhereInput {
  AND?: InviteToProjectWhereInput[] | null;
  OR?: InviteToProjectWhereInput[] | null;
  NOT?: InviteToProjectWhereInput[] | null;
  id?: StringFilter | null;
  state?: EnumInviteToProjectStateFilter | null;
  expiresAt?: DateTimeFilter | null;
  acceptedAt?: DateTimeNullableFilter | null;
  rejectedAt?: DateTimeNullableFilter | null;
  message?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  projectId?: StringFilter | null;
  fromId?: StringFilter | null;
  toId?: StringFilter | null;
  project?: ProjectWhereInput | null;
  to?: ParticipantWhereInput | null;
  from?: UserWhereInput | null;
}

export interface JsonFilter {
  equals?: any | null;
  not?: any | null;
}

export interface JsonNullableFilter {
  equals?: any | null;
  not?: any | null;
}

export interface JuryListRelationFilter {
  every?: JuryWhereInput | null;
  some?: JuryWhereInput | null;
  none?: JuryWhereInput | null;
}

export interface JuryWhereInput {
  AND?: JuryWhereInput[] | null;
  OR?: JuryWhereInput[] | null;
  NOT?: JuryWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumJuryTypeFilter | null;
  weight?: IntFilter | null;
  registrationInfo?: JsonNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  challengeId?: StringFilter | null;
  challengeStepId?: StringNullableFilter | null;
  hiringStepId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  challengeStep?: ChallengeStepWhereInput | null;
  hiringStep?: HiringStepWhereInput | null;
  cart?: VotingCartWhereInput | null;
  user?: UserWhereInput | null;
}

export interface LiveStageEventListRelationFilter {
  every?: LiveStageEventWhereInput | null;
  some?: LiveStageEventWhereInput | null;
  none?: LiveStageEventWhereInput | null;
}

export interface LiveStageEventWhereInput {
  AND?: LiveStageEventWhereInput[] | null;
  OR?: LiveStageEventWhereInput[] | null;
  NOT?: LiveStageEventWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringNullableFilter | null;
  startsAt?: DateTimeFilter | null;
  endsAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  coverImageId?: StringNullableFilter | null;
  stageId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  coverImage?: FileWhereInput | null;
  stage?: LiveStageWhereInput | null;
}

export interface LiveStageListRelationFilter {
  every?: LiveStageWhereInput | null;
  some?: LiveStageWhereInput | null;
  none?: LiveStageWhereInput | null;
}

export interface LiveStageWhereInput {
  AND?: LiveStageWhereInput[] | null;
  OR?: LiveStageWhereInput[] | null;
  NOT?: LiveStageWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringNullableFilter | null;
  permissions?: EnumUserPermissionsNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  muxLiveStreamId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  muxLiveStream?: MuxLivestreamWhereInput | null;
  events?: LiveStageEventListRelationFilter | null;
}

export interface MailListRelationFilter {
  every?: MailWhereInput | null;
  some?: MailWhereInput | null;
  none?: MailWhereInput | null;
}

export interface MailReceiptListRelationFilter {
  every?: MailReceiptWhereInput | null;
  some?: MailReceiptWhereInput | null;
  none?: MailReceiptWhereInput | null;
}

export interface MailReceiptWhereInput {
  AND?: MailReceiptWhereInput[] | null;
  OR?: MailReceiptWhereInput[] | null;
  NOT?: MailReceiptWhereInput[] | null;
  id?: StringFilter | null;
  isRead?: BoolFilter | null;
  readAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  mailId?: StringFilter | null;
  userId?: StringFilter | null;
  mail?: MailWhereInput | null;
  user?: UserWhereInput | null;
}

export interface MailRecipientListRelationFilter {
  every?: MailRecipientWhereInput | null;
  some?: MailRecipientWhereInput | null;
  none?: MailRecipientWhereInput | null;
}

export interface MailRecipientWhereInput {
  AND?: MailRecipientWhereInput[] | null;
  OR?: MailRecipientWhereInput[] | null;
  NOT?: MailRecipientWhereInput[] | null;
  id?: StringFilter | null;
  state?: EnumRecipientStateFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  threadId?: StringFilter | null;
  userId?: StringFilter | null;
  thread?: MailThreadWhereInput | null;
  user?: UserWhereInput | null;
}

export interface MailThreadListRelationFilter {
  every?: MailThreadWhereInput | null;
  some?: MailThreadWhereInput | null;
  none?: MailThreadWhereInput | null;
}

export interface MailThreadWhereInput {
  AND?: MailThreadWhereInput[] | null;
  OR?: MailThreadWhereInput[] | null;
  NOT?: MailThreadWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumMailThreadTypeFilter | null;
  subject?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  lastMailAt?: DateTimeNullableFilter | null;
  mailCount?: IntFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringNullableFilter | null;
  projectId?: StringNullableFilter | null;
  mails?: MailListRelationFilter | null;
  recipients?: MailRecipientListRelationFilter | null;
  challenge?: ChallengeWhereInput | null;
  project?: ProjectWhereInput | null;
}

export interface MailWhereInput {
  AND?: MailWhereInput[] | null;
  OR?: MailWhereInput[] | null;
  NOT?: MailWhereInput[] | null;
  id?: StringFilter | null;
  content?: StringFilter | null;
  sentAt?: DateTimeFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  threadId?: StringFilter | null;
  fromId?: StringFilter | null;
  thread?: MailThreadWhereInput | null;
  mailReceipts?: MailReceiptListRelationFilter | null;
  from?: UserWhereInput | null;
}

export interface MentorListRelationFilter {
  every?: MentorWhereInput | null;
  some?: MentorWhereInput | null;
  none?: MentorWhereInput | null;
}

export interface MentorWhereInput {
  AND?: MentorWhereInput[] | null;
  OR?: MentorWhereInput[] | null;
  NOT?: MentorWhereInput[] | null;
  id?: StringFilter | null;
  description?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
}

export interface MomentTimeZoneWhereInput {
  AND?: MomentTimeZoneWhereInput[] | null;
  OR?: MomentTimeZoneWhereInput[] | null;
  NOT?: MomentTimeZoneWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challenges?: ChallengeListRelationFilter | null;
}

export interface MuxAssetListRelationFilter {
  every?: MuxAssetWhereInput | null;
  some?: MuxAssetWhereInput | null;
  none?: MuxAssetWhereInput | null;
}

export interface MuxAssetWhereInput {
  AND?: MuxAssetWhereInput[] | null;
  OR?: MuxAssetWhereInput[] | null;
  NOT?: MuxAssetWhereInput[] | null;
  id?: StringFilter | null;
  muxID?: StringFilter | null;
  status?: EnumMuxAssetStatusFilter | null;
  duration?: FloatNullableFilter | null;
  tracks?: JsonNullableFilter | null;
  aspectRatio?: StringNullableFilter | null;
  playbackId?: StringNullableFilter | null;
  playbackUrl?: StringNullableFilter | null;
  thumbnailUrl?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  muxLiveStreamId?: StringFilter | null;
  muxLiveStream?: MuxLivestreamWhereInput | null;
}

export interface MuxLivestreamWhereInput {
  AND?: MuxLivestreamWhereInput[] | null;
  OR?: MuxLivestreamWhereInput[] | null;
  NOT?: MuxLivestreamWhereInput[] | null;
  id?: StringFilter | null;
  muxID?: StringFilter | null;
  status?: EnumMuxLiveStreamStatusFilter | null;
  playbackId?: StringFilter | null;
  playbackUrl?: StringFilter | null;
  streamUrl?: StringFilter | null;
  streamKey?: StringFilter | null;
  thumbnailUrl?: StringNullableFilter | null;
  totalRecordTime?: FloatNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  stage?: LiveStageWhereInput | null;
  assets?: MuxAssetListRelationFilter | null;
  simulcastTargets?: SimulcastTargetListRelationFilter | null;
}

export interface NestedBoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface NestedBoolNullableFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface NestedDateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedEnumAccountVerificationStatusFilter {
  equals?: AccountVerificationStatus | null;
  in?: AccountVerificationStatus[] | null;
  notIn?: AccountVerificationStatus[] | null;
  not?: NestedEnumAccountVerificationStatusFilter | null;
}

export interface NestedEnumAllowedParticipantsFilter {
  equals?: AllowedParticipants | null;
  in?: AllowedParticipants[] | null;
  notIn?: AllowedParticipants[] | null;
  not?: NestedEnumAllowedParticipantsFilter | null;
}

export interface NestedEnumAssessResultNullableFilter {
  equals?: AssessResult | null;
  in?: AssessResult[] | null;
  notIn?: AssessResult[] | null;
  not?: NestedEnumAssessResultNullableFilter | null;
}

export interface NestedEnumAttachmentsVisibilityNullableFilter {
  equals?: AttachmentsVisibility | null;
  in?: AttachmentsVisibility[] | null;
  notIn?: AttachmentsVisibility[] | null;
  not?: NestedEnumAttachmentsVisibilityNullableFilter | null;
}

export interface NestedEnumBrowserTypeNullableFilter {
  equals?: BrowserType | null;
  in?: BrowserType[] | null;
  notIn?: BrowserType[] | null;
  not?: NestedEnumBrowserTypeNullableFilter | null;
}

export interface NestedEnumCappedMinterTypeFilter {
  equals?: CappedMinterType | null;
  in?: CappedMinterType[] | null;
  notIn?: CappedMinterType[] | null;
  not?: NestedEnumCappedMinterTypeFilter | null;
}

export interface NestedEnumChallengeTabTypeFilter {
  equals?: ChallengeTabType | null;
  in?: ChallengeTabType[] | null;
  notIn?: ChallengeTabType[] | null;
  not?: NestedEnumChallengeTabTypeFilter | null;
}

export interface NestedEnumChallengeTypeFilter {
  equals?: ChallengeType | null;
  in?: ChallengeType[] | null;
  notIn?: ChallengeType[] | null;
  not?: NestedEnumChallengeTypeFilter | null;
}

export interface NestedEnumCurrencyFilter {
  equals?: Currency | null;
  in?: Currency[] | null;
  notIn?: Currency[] | null;
  not?: NestedEnumCurrencyFilter | null;
}

export interface NestedEnumDeliveryStatusFilter {
  equals?: DeliveryStatus | null;
  in?: DeliveryStatus[] | null;
  notIn?: DeliveryStatus[] | null;
  not?: NestedEnumDeliveryStatusFilter | null;
}

export interface NestedEnumDeviceTypeNullableFilter {
  equals?: DeviceType | null;
  in?: DeviceType[] | null;
  notIn?: DeviceType[] | null;
  not?: NestedEnumDeviceTypeNullableFilter | null;
}

export interface NestedEnumDividendTypeFilter {
  equals?: DividendType | null;
  in?: DividendType[] | null;
  notIn?: DividendType[] | null;
  not?: NestedEnumDividendTypeFilter | null;
}

export interface NestedEnumEmailStatusTypeFilter {
  equals?: EmailStatusType | null;
  in?: EmailStatusType[] | null;
  notIn?: EmailStatusType[] | null;
  not?: NestedEnumEmailStatusTypeFilter | null;
}

export interface NestedEnumEvaluationTypeFilter {
  equals?: EvaluationType | null;
  in?: EvaluationType[] | null;
  notIn?: EvaluationType[] | null;
  not?: NestedEnumEvaluationTypeFilter | null;
}

export interface NestedEnumFormHookTypeFilter {
  equals?: FormHookType | null;
  in?: FormHookType[] | null;
  notIn?: FormHookType[] | null;
  not?: NestedEnumFormHookTypeFilter | null;
}

export interface NestedEnumFormOwnerTypeFilter {
  equals?: FormOwnerType | null;
  in?: FormOwnerType[] | null;
  notIn?: FormOwnerType[] | null;
  not?: NestedEnumFormOwnerTypeFilter | null;
}

export interface NestedEnumFormTypeNullableFilter {
  equals?: FormType | null;
  in?: FormType[] | null;
  notIn?: FormType[] | null;
  not?: NestedEnumFormTypeNullableFilter | null;
}

export interface NestedEnumGenderNullableFilter {
  equals?: Gender | null;
  in?: Gender[] | null;
  notIn?: Gender[] | null;
  not?: NestedEnumGenderNullableFilter | null;
}

export interface NestedEnumIdentityVerificationStatusFilter {
  equals?: IdentityVerificationStatus | null;
  in?: IdentityVerificationStatus[] | null;
  notIn?: IdentityVerificationStatus[] | null;
  not?: NestedEnumIdentityVerificationStatusFilter | null;
}

export interface NestedEnumInviteStateNullableFilter {
  equals?: InviteState | null;
  in?: InviteState[] | null;
  notIn?: InviteState[] | null;
  not?: NestedEnumInviteStateNullableFilter | null;
}

export interface NestedEnumInviteToProjectStateFilter {
  equals?: InviteToProjectState | null;
  in?: InviteToProjectState[] | null;
  notIn?: InviteToProjectState[] | null;
  not?: NestedEnumInviteToProjectStateFilter | null;
}

export interface NestedEnumInviteTypeNullableFilter {
  equals?: InviteType | null;
  in?: InviteType[] | null;
  notIn?: InviteType[] | null;
  not?: NestedEnumInviteTypeNullableFilter | null;
}

export interface NestedEnumJuryTypeFilter {
  equals?: JuryType | null;
  in?: JuryType[] | null;
  notIn?: JuryType[] | null;
  not?: NestedEnumJuryTypeFilter | null;
}

export interface NestedEnumMailThreadTypeFilter {
  equals?: MailThreadType | null;
  in?: MailThreadType[] | null;
  notIn?: MailThreadType[] | null;
  not?: NestedEnumMailThreadTypeFilter | null;
}

export interface NestedEnumMuxAssetStatusFilter {
  equals?: MuxAssetStatus | null;
  in?: MuxAssetStatus[] | null;
  notIn?: MuxAssetStatus[] | null;
  not?: NestedEnumMuxAssetStatusFilter | null;
}

export interface NestedEnumMuxLiveStreamStatusFilter {
  equals?: MuxLiveStreamStatus | null;
  in?: MuxLiveStreamStatus[] | null;
  notIn?: MuxLiveStreamStatus[] | null;
  not?: NestedEnumMuxLiveStreamStatusFilter | null;
}

export interface NestedEnumNotificationTypeFilter {
  equals?: NotificationType | null;
  in?: NotificationType[] | null;
  notIn?: NotificationType[] | null;
  not?: NestedEnumNotificationTypeFilter | null;
}

export interface NestedEnumOSTypeNullableFilter {
  equals?: OSType | null;
  in?: OSType[] | null;
  notIn?: OSType[] | null;
  not?: NestedEnumOSTypeNullableFilter | null;
}

export interface NestedEnumOrganizationRoleFilter {
  equals?: OrganizationRole | null;
  in?: OrganizationRole[] | null;
  notIn?: OrganizationRole[] | null;
  not?: NestedEnumOrganizationRoleFilter | null;
}

export interface NestedEnumOrganizationRoleNullableFilter {
  equals?: OrganizationRole | null;
  in?: OrganizationRole[] | null;
  notIn?: OrganizationRole[] | null;
  not?: NestedEnumOrganizationRoleNullableFilter | null;
}

export interface NestedEnumOrganizationTypeNullableFilter {
  equals?: OrganizationType | null;
  in?: OrganizationType[] | null;
  notIn?: OrganizationType[] | null;
  not?: NestedEnumOrganizationTypeNullableFilter | null;
}

export interface NestedEnumParticipantStateNullableFilter {
  equals?: ParticipantState | null;
  in?: ParticipantState[] | null;
  notIn?: ParticipantState[] | null;
  not?: NestedEnumParticipantStateNullableFilter | null;
}

export interface NestedEnumProjectApplicantStateFilter {
  equals?: ProjectApplicantState | null;
  in?: ProjectApplicantState[] | null;
  notIn?: ProjectApplicantState[] | null;
  not?: NestedEnumProjectApplicantStateFilter | null;
}

export interface NestedEnumProjectPositionStateFilter {
  equals?: ProjectPositionState | null;
  in?: ProjectPositionState[] | null;
  notIn?: ProjectPositionState[] | null;
  not?: NestedEnumProjectPositionStateFilter | null;
}

export interface NestedEnumProjectRoleFilter {
  equals?: ProjectRole | null;
  in?: ProjectRole[] | null;
  notIn?: ProjectRole[] | null;
  not?: NestedEnumProjectRoleFilter | null;
}

export interface NestedEnumProjectStateNullableFilter {
  equals?: ProjectState | null;
  in?: ProjectState[] | null;
  notIn?: ProjectState[] | null;
  not?: NestedEnumProjectStateNullableFilter | null;
}

export interface NestedEnumPublishDocTypeNullableFilter {
  equals?: PublishDocType | null;
  in?: PublishDocType[] | null;
  notIn?: PublishDocType[] | null;
  not?: NestedEnumPublishDocTypeNullableFilter | null;
}

export interface NestedEnumPublishStateNullableFilter {
  equals?: PublishState | null;
  in?: PublishState[] | null;
  notIn?: PublishState[] | null;
  not?: NestedEnumPublishStateNullableFilter | null;
}

export interface NestedEnumQuestionTypeFilter {
  equals?: QuestionType | null;
  in?: QuestionType[] | null;
  notIn?: QuestionType[] | null;
  not?: NestedEnumQuestionTypeFilter | null;
}

export interface NestedEnumRecipientStateFilter {
  equals?: RecipientState | null;
  in?: RecipientState[] | null;
  notIn?: RecipientState[] | null;
  not?: NestedEnumRecipientStateFilter | null;
}

export interface NestedEnumReferralStateFilter {
  equals?: ReferralState | null;
  in?: ReferralState[] | null;
  notIn?: ReferralState[] | null;
  not?: NestedEnumReferralStateFilter | null;
}

export interface NestedEnumStoryStateNullableFilter {
  equals?: StoryState | null;
  in?: StoryState[] | null;
  notIn?: StoryState[] | null;
  not?: NestedEnumStoryStateNullableFilter | null;
}

export interface NestedEnumTokenTypeFilter {
  equals?: TokenType | null;
  in?: TokenType[] | null;
  notIn?: TokenType[] | null;
  not?: NestedEnumTokenTypeFilter | null;
}

export interface NestedEnumTransactionStatusFilter {
  equals?: TransactionStatus | null;
  in?: TransactionStatus[] | null;
  notIn?: TransactionStatus[] | null;
  not?: NestedEnumTransactionStatusFilter | null;
}

export interface NestedEnumUserAuthTypeFilter {
  equals?: UserAuthType | null;
  in?: UserAuthType[] | null;
  notIn?: UserAuthType[] | null;
  not?: NestedEnumUserAuthTypeFilter | null;
}

export interface NestedEnumUserPermissionsNullableFilter {
  equals?: UserPermissions | null;
  in?: UserPermissions[] | null;
  notIn?: UserPermissions[] | null;
  not?: NestedEnumUserPermissionsNullableFilter | null;
}

export interface NestedEnumUserRoleFilter {
  equals?: UserRole | null;
  in?: UserRole[] | null;
  notIn?: UserRole[] | null;
  not?: NestedEnumUserRoleFilter | null;
}

export interface NestedEnumUserStateFilter {
  equals?: UserState | null;
  in?: UserState[] | null;
  notIn?: UserState[] | null;
  not?: NestedEnumUserStateFilter | null;
}

export interface NestedEnumVideoOnDemandSourceFilter {
  equals?: VideoOnDemandSource | null;
  in?: VideoOnDemandSource[] | null;
  notIn?: VideoOnDemandSource[] | null;
  not?: NestedEnumVideoOnDemandSourceFilter | null;
}

export interface NestedEnumVotingCartItemStatusNullableFilter {
  equals?: VotingCartItemStatus | null;
  in?: VotingCartItemStatus[] | null;
  notIn?: VotingCartItemStatus[] | null;
  not?: NestedEnumVotingCartItemStatusNullableFilter | null;
}

export interface NestedEnumVotingCartStatusFilter {
  equals?: VotingCartStatus | null;
  in?: VotingCartStatus[] | null;
  notIn?: VotingCartStatus[] | null;
  not?: NestedEnumVotingCartStatusFilter | null;
}

export interface NestedEnumVotingSchemeFilter {
  equals?: VotingScheme | null;
  in?: VotingScheme[] | null;
  notIn?: VotingScheme[] | null;
  not?: NestedEnumVotingSchemeFilter | null;
}

export interface NestedEnumVotingTypeNullableFilter {
  equals?: VotingType | null;
  in?: VotingType[] | null;
  notIn?: VotingType[] | null;
  not?: NestedEnumVotingTypeNullableFilter | null;
}

export interface NestedEnumVoucherReddemStatusFilter {
  equals?: VoucherReddemStatus | null;
  in?: VoucherReddemStatus[] | null;
  notIn?: VoucherReddemStatus[] | null;
  not?: NestedEnumVoucherReddemStatusFilter | null;
}

export interface NestedEnumVoucherStatusFilter {
  equals?: VoucherStatus | null;
  in?: VoucherStatus[] | null;
  notIn?: VoucherStatus[] | null;
  not?: NestedEnumVoucherStatusFilter | null;
}

export interface NestedEnumVoucherTypeFilter {
  equals?: VoucherType | null;
  in?: VoucherType[] | null;
  notIn?: VoucherType[] | null;
  not?: NestedEnumVoucherTypeFilter | null;
}

export interface NestedEnumWalletTypeFilter {
  equals?: WalletType | null;
  in?: WalletType[] | null;
  notIn?: WalletType[] | null;
  not?: NestedEnumWalletTypeFilter | null;
}

export interface NestedEnumWebhookStateFilter {
  equals?: WebhookState | null;
  in?: WebhookState[] | null;
  notIn?: WebhookState[] | null;
  not?: NestedEnumWebhookStateFilter | null;
}

export interface NestedEnumWebhookTypeFilter {
  equals?: WebhookType | null;
  in?: WebhookType[] | null;
  notIn?: WebhookType[] | null;
  not?: NestedEnumWebhookTypeFilter | null;
}

export interface NestedFloatFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatFilter | null;
}

export interface NestedFloatNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatNullableFilter | null;
}

export interface NestedIntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringFilter | null;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringNullableFilter | null;
}

export interface NotificationListRelationFilter {
  every?: NotificationWhereInput | null;
  some?: NotificationWhereInput | null;
  none?: NotificationWhereInput | null;
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | null;
  OR?: NotificationWhereInput[] | null;
  NOT?: NotificationWhereInput[] | null;
  id?: StringFilter | null;
  message?: StringFilter | null;
  isRead?: BoolFilter | null;
  type?: EnumNotificationTypeFilter | null;
  link?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
  challengeId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  imageId?: StringNullableFilter | null;
  image?: FileWhereInput | null;
}

export interface OrganizationBillingPlanWhereInput {
  AND?: OrganizationBillingPlanWhereInput[] | null;
  OR?: OrganizationBillingPlanWhereInput[] | null;
  NOT?: OrganizationBillingPlanWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  description?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  features?: EnumFeatureNullableListFilter | null;
  organizations?: OrganizationListRelationFilter | null;
}

export interface OrganizationListRelationFilter {
  every?: OrganizationWhereInput | null;
  some?: OrganizationWhereInput | null;
  none?: OrganizationWhereInput | null;
}

export interface OrganizationUserListRelationFilter {
  every?: OrganizationUserWhereInput | null;
  some?: OrganizationUserWhereInput | null;
  none?: OrganizationUserWhereInput | null;
}

export interface OrganizationUserWhereInput {
  AND?: OrganizationUserWhereInput[] | null;
  OR?: OrganizationUserWhereInput[] | null;
  NOT?: OrganizationUserWhereInput[] | null;
  id?: StringFilter | null;
  role?: EnumOrganizationRoleFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  organizationId?: StringFilter | null;
  userId?: StringFilter | null;
  organization?: OrganizationWhereInput | null;
  user?: UserWhereInput | null;
}

export interface OrganizationWhereInput {
  AND?: OrganizationWhereInput[] | null;
  OR?: OrganizationWhereInput[] | null;
  NOT?: OrganizationWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  slug?: StringFilter | null;
  shortDescription?: StringNullableFilter | null;
  description?: StringNullableFilter | null;
  keywords?: StringNullableFilter | null;
  phoneNumber?: StringNullableFilter | null;
  email?: StringFilter | null;
  streetAddress?: StringNullableFilter | null;
  postalCode?: StringNullableFilter | null;
  city?: StringNullableFilter | null;
  country?: StringNullableFilter | null;
  type?: EnumOrganizationTypeNullableFilter | null;
  isFeatured?: BoolFilter | null;
  twitterUrl?: StringNullableFilter | null;
  linkedInUrl?: StringNullableFilter | null;
  youtubeUrl?: StringNullableFilter | null;
  challengesDescription?: StringNullableFilter | null;
  challengesCount?: IntFilter | null;
  challengesActiveCount?: IntFilter | null;
  totalPrizes?: IntFilter | null;
  homepage?: StringNullableFilter | null;
  order?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  metadata?: JsonNullableFilter | null;
  cardImageFileId?: StringNullableFilter | null;
  coverImageFileId?: StringNullableFilter | null;
  logoImageFileId?: StringNullableFilter | null;
  billingPlanId?: StringNullableFilter | null;
  challenges?: ChallengeListRelationFilter | null;
  users?: OrganizationUserListRelationFilter | null;
  publishInfo?: PublishInfoWhereInput | null;
  sponsors?: SponsorListRelationFilter | null;
  industries?: IndustryListRelationFilter | null;
  invites?: InviteToOrganizationListRelationFilter | null;
  cardImageFile?: FileWhereInput | null;
  coverImageFile?: FileWhereInput | null;
  logoImageFile?: FileWhereInput | null;
  billingPlan?: OrganizationBillingPlanWhereInput | null;
  forms?: FormOwnerListRelationFilter | null;
}

export interface ParticipantListRelationFilter {
  every?: ParticipantWhereInput | null;
  some?: ParticipantWhereInput | null;
  none?: ParticipantWhereInput | null;
}

export interface ParticipantWhereInput {
  AND?: ParticipantWhereInput[] | null;
  OR?: ParticipantWhereInput[] | null;
  NOT?: ParticipantWhereInput[] | null;
  id?: StringFilter | null;
  state?: EnumParticipantStateNullableFilter | null;
  isAvailableToHire?: BoolNullableFilter | null;
  registrationInfo?: JsonNullableFilter | null;
  startedProjectAt?: DateTimeNullableFilter | null;
  endProjectAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  userId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  user?: UserWhereInput | null;
  formSubmissionId?: StringNullableFilter | null;
  registration?: FormSubmissionWhereInput | null;
  stepId?: StringNullableFilter | null;
  step?: HiringStepWhereInput | null;
  invitesToProject?: InviteToProjectListRelationFilter | null;
  hiringComments?: HiringCommentListRelationFilter | null;
  attachments?: FileListRelationFilter | null;
  votingResumes?: VotingResumeListRelationFilter | null;
  tags?: StringNullableListFilter | null;
  project?: ProjectWhereInput | null;
}

export interface PrivateChallengeConfigurationWhereInput {
  AND?: PrivateChallengeConfigurationWhereInput[] | null;
  OR?: PrivateChallengeConfigurationWhereInput[] | null;
  NOT?: PrivateChallengeConfigurationWhereInput[] | null;
  id?: StringFilter | null;
  webhookUrl?: StringNullableFilter | null;
  webhookAuthorizationKey?: StringNullableFilter | null;
  allowSelfBack?: BoolNullableFilter | null;
  isStepChangeAutomatic?: BoolNullableFilter | null;
  distributeBackerRewards?: BoolNullableFilter | null;
  notifyOnStepChallenge?: BoolNullableFilter | null;
  sendEmailOnChallengeUpdates?: BoolNullableFilter | null;
  canUnregister?: BoolNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  rejectionEmailTemplate?: StringNullableFilter | null;
  acceptanceEmailTemplate?: StringNullableFilter | null;
}

export interface PrivateOrganizationWhereInput {
  AND?: PrivateOrganizationWhereInput[] | null;
  OR?: PrivateOrganizationWhereInput[] | null;
  NOT?: PrivateOrganizationWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringNullableFilter | null;
  websiteUrl?: StringNullableFilter | null;
  blogUrl?: StringNullableFilter | null;
  angellistUrl?: StringNullableFilter | null;
  linkedinUrl?: StringNullableFilter | null;
  twitterUrl?: StringNullableFilter | null;
  facebookUrl?: StringNullableFilter | null;
  alexaRanking?: IntNullableFilter | null;
  phone?: StringNullableFilter | null;
  logoUrl?: StringNullableFilter | null;
  crunchbaseUrl?: StringNullableFilter | null;
  primaryDomain?: StringNullableFilter | null;
  publiclyTradedSymbol?: StringNullableFilter | null;
  publiclyTradedExchange?: StringNullableFilter | null;
  privateUsers?: PrivateUserListRelationFilter | null;
}

export interface PrivateUserListRelationFilter {
  every?: PrivateUserWhereInput | null;
  some?: PrivateUserWhereInput | null;
  none?: PrivateUserWhereInput | null;
}

export interface PrivateUserWhereInput {
  AND?: PrivateUserWhereInput[] | null;
  OR?: PrivateUserWhereInput[] | null;
  NOT?: PrivateUserWhereInput[] | null;
  id?: StringFilter | null;
  firstName?: StringNullableFilter | null;
  lastName?: StringNullableFilter | null;
  linkedinUrl?: StringNullableFilter | null;
  photoUrl?: StringNullableFilter | null;
  twitterUrl?: StringNullableFilter | null;
  githubUrl?: StringNullableFilter | null;
  country?: StringNullableFilter | null;
  city?: StringNullableFilter | null;
  state?: StringNullableFilter | null;
  title?: StringNullableFilter | null;
  headline?: StringNullableFilter | null;
  userId?: StringNullableFilter | null;
  user?: UserWhereInput | null;
  privateOrganizationId?: StringNullableFilter | null;
  privateOrganization?: PrivateOrganizationWhereInput | null;
}

export interface ProjectApplicantListRelationFilter {
  every?: ProjectApplicantWhereInput | null;
  some?: ProjectApplicantWhereInput | null;
  none?: ProjectApplicantWhereInput | null;
}

export interface ProjectApplicantWhereInput {
  AND?: ProjectApplicantWhereInput[] | null;
  OR?: ProjectApplicantWhereInput[] | null;
  NOT?: ProjectApplicantWhereInput[] | null;
  id?: StringFilter | null;
  state?: EnumProjectApplicantStateFilter | null;
  message?: StringNullableFilter | null;
  answer?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  projectPositionId?: StringFilter | null;
  userId?: StringFilter | null;
  projectPosition?: ProjectPositionWhereInput | null;
  user?: UserWhereInput | null;
}

export interface ProjectListRelationFilter {
  every?: ProjectWhereInput | null;
  some?: ProjectWhereInput | null;
  none?: ProjectWhereInput | null;
}

export interface ProjectMemberListRelationFilter {
  every?: ProjectMemberWhereInput | null;
  some?: ProjectMemberWhereInput | null;
  none?: ProjectMemberWhereInput | null;
}

export interface ProjectMemberWhereInput {
  AND?: ProjectMemberWhereInput[] | null;
  OR?: ProjectMemberWhereInput[] | null;
  NOT?: ProjectMemberWhereInput[] | null;
  id?: StringFilter | null;
  role?: EnumProjectRoleFilter | null;
  challengeId?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  projectId?: StringFilter | null;
  project?: ProjectWhereInput | null;
  user?: UserWhereInput | null;
  positions?: ProjectPositionListRelationFilter | null;
}

export interface ProjectPositionListRelationFilter {
  every?: ProjectPositionWhereInput | null;
  some?: ProjectPositionWhereInput | null;
  none?: ProjectPositionWhereInput | null;
}

export interface ProjectPositionWhereInput {
  AND?: ProjectPositionWhereInput[] | null;
  OR?: ProjectPositionWhereInput[] | null;
  NOT?: ProjectPositionWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  state?: EnumProjectPositionStateFilter | null;
  description?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  projectId?: StringFilter | null;
  acceptedMemberId?: StringNullableFilter | null;
  applicants?: ProjectApplicantListRelationFilter | null;
  acceptedMember?: ProjectMemberWhereInput | null;
  skills?: TechnicalSkillListRelationFilter | null;
  project?: ProjectWhereInput | null;
}

export interface ProjectRegistrationListRelationFilter {
  every?: ProjectRegistrationWhereInput | null;
  some?: ProjectRegistrationWhereInput | null;
  none?: ProjectRegistrationWhereInput | null;
}

export interface ProjectRegistrationWhereInput {
  AND?: ProjectRegistrationWhereInput[] | null;
  OR?: ProjectRegistrationWhereInput[] | null;
  NOT?: ProjectRegistrationWhereInput[] | null;
  id?: StringFilter | null;
  confirmUntil?: DateTimeFilter | null;
  token?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  user?: UserWhereInput | null;
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | null;
  OR?: ProjectWhereInput[] | null;
  NOT?: ProjectWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  teaser?: StringFilter | null;
  description?: StringNullableFilter | null;
  videoUrl?: StringNullableFilter | null;
  codeUrl?: StringNullableFilter | null;
  backersCount?: IntFilter | null;
  state?: EnumProjectStateNullableFilter | null;
  totalBacked?: IntNullableFilter | null;
  randomOrder?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  metadata?: JsonNullableFilter | null;
  tags?: StringNullableListFilter | null;
  authorId?: StringFilter | null;
  challengeId?: StringFilter | null;
  cardImageFileId?: StringNullableFilter | null;
  coverImageFileId?: StringNullableFilter | null;
  logoImageFileId?: StringNullableFilter | null;
  author?: UserWhereInput | null;
  challenge?: ChallengeWhereInput | null;
  wallet?: WalletWhereInput | null;
  backers?: BackerListRelationFilter | null;
  invites?: InviteToProjectListRelationFilter | null;
  members?: ProjectMemberListRelationFilter | null;
  votingCartItem?: VotingCartItemListRelationFilter | null;
  finalBalance?: ChallengeBalanceTableWhereInput | null;
  challengeCategories?: ChallengeCategoryListRelationFilter | null;
  dividends?: DividendListRelationFilter | null;
  mailThreads?: MailThreadListRelationFilter | null;
  cardImageFile?: FileWhereInput | null;
  coverImageFile?: FileWhereInput | null;
  files?: FileListRelationFilter | null;
  logoImageFile?: FileWhereInput | null;
  positions?: ProjectPositionListRelationFilter | null;
  transactions?: TransactionListRelationFilter | null;
  participantId?: StringNullableFilter | null;
  positionsOpenCount?: IntFilter | null;
  participant?: ParticipantWhereInput | null;
}

export interface PublishInfoListRelationFilter {
  every?: PublishInfoWhereInput | null;
  some?: PublishInfoWhereInput | null;
  none?: PublishInfoWhereInput | null;
}

export interface PublishInfoWhereInput {
  AND?: PublishInfoWhereInput[] | null;
  OR?: PublishInfoWhereInput[] | null;
  NOT?: PublishInfoWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumPublishDocTypeNullableFilter | null;
  draftToken?: StringNullableFilter | null;
  privateToken?: StringNullableFilter | null;
  submittedAt?: DateTimeNullableFilter | null;
  acceptedAt?: DateTimeNullableFilter | null;
  state?: EnumPublishStateNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  organizationId?: StringNullableFilter | null;
  challengeId?: StringNullableFilter | null;
  submittedById?: StringNullableFilter | null;
  acceptedById?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  organization?: OrganizationWhereInput | null;
  acceptedBy?: UserWhereInput | null;
  submittedBy?: UserWhereInput | null;
}

export interface ReferralListRelationFilter {
  every?: ReferralWhereInput | null;
  some?: ReferralWhereInput | null;
  none?: ReferralWhereInput | null;
}

export interface ReferralWhereInput {
  AND?: ReferralWhereInput[] | null;
  OR?: ReferralWhereInput[] | null;
  NOT?: ReferralWhereInput[] | null;
  id?: StringFilter | null;
  toEmail?: StringNullableFilter | null;
  state?: EnumReferralStateFilter | null;
  lastEmailSentAt?: DateTimeNullableFilter | null;
  sentEmailsCount?: IntFilter | null;
  acccountCreatedAt?: DateTimeNullableFilter | null;
  completedAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  fromId?: StringFilter | null;
  from?: UserWhereInput | null;
  toId?: StringNullableFilter | null;
  to?: UserWhereInput | null;
}

export interface SessionListRelationFilter {
  every?: SessionWhereInput | null;
  some?: SessionWhereInput | null;
  none?: SessionWhereInput | null;
}

export interface SessionWhereInput {
  AND?: SessionWhereInput[] | null;
  OR?: SessionWhereInput[] | null;
  NOT?: SessionWhereInput[] | null;
  id?: StringFilter | null;
  ipAddress?: StringFilter | null;
  deviceType?: EnumDeviceTypeNullableFilter | null;
  osType?: EnumOSTypeNullableFilter | null;
  browserType?: EnumBrowserTypeNullableFilter | null;
  browser?: StringNullableFilter | null;
  version?: StringNullableFilter | null;
  os?: StringNullableFilter | null;
  platform?: StringNullableFilter | null;
  source?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
}

export interface SimulcastTargetListRelationFilter {
  every?: SimulcastTargetWhereInput | null;
  some?: SimulcastTargetWhereInput | null;
  none?: SimulcastTargetWhereInput | null;
}

export interface SimulcastTargetWhereInput {
  AND?: SimulcastTargetWhereInput[] | null;
  OR?: SimulcastTargetWhereInput[] | null;
  NOT?: SimulcastTargetWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  muxID?: StringFilter | null;
  streamKey?: StringFilter | null;
  streamUrl?: StringFilter | null;
  passthrough?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  livestreamId?: StringFilter | null;
  livestream?: MuxLivestreamWhereInput | null;
}

export interface SkewedCappedMinterListRelationFilter {
  every?: SkewedCappedMinterWhereInput | null;
  some?: SkewedCappedMinterWhereInput | null;
  none?: SkewedCappedMinterWhereInput | null;
}

export interface SkewedCappedMinterWhereInput {
  AND?: SkewedCappedMinterWhereInput[] | null;
  OR?: SkewedCappedMinterWhereInput[] | null;
  NOT?: SkewedCappedMinterWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumCappedMinterTypeFilter | null;
  base?: FloatFilter | null;
  supply?: FloatFilter | null;
  maxSupply?: FloatFilter | null;
  skewness?: FloatFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface SponsorListRelationFilter {
  every?: SponsorWhereInput | null;
  some?: SponsorWhereInput | null;
  none?: SponsorWhereInput | null;
}

export interface SponsorWhereInput {
  AND?: SponsorWhereInput[] | null;
  OR?: SponsorWhereInput[] | null;
  NOT?: SponsorWhereInput[] | null;
  id?: StringFilter | null;
  order?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  organizationId?: StringFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  organization?: OrganizationWhereInput | null;
}

export interface StoryListRelationFilter {
  every?: StoryWhereInput | null;
  some?: StoryWhereInput | null;
  none?: StoryWhereInput | null;
}

export interface StoryWhereInput {
  AND?: StoryWhereInput[] | null;
  OR?: StoryWhereInput[] | null;
  NOT?: StoryWhereInput[] | null;
  id?: StringFilter | null;
  slug?: StringFilter | null;
  slug_br?: StringNullableFilter | null;
  title?: StringFilter | null;
  title_br?: StringNullableFilter | null;
  shortDescription?: StringFilter | null;
  shortDescription_br?: StringNullableFilter | null;
  content?: StringFilter | null;
  content_br?: StringNullableFilter | null;
  state?: EnumStoryStateNullableFilter | null;
  blogSource?: EnumStoryBlogSourceFilter | null;
  draftToken?: StringFilter | null;
  seoTitle?: StringNullableFilter | null;
  seoTitle_br?: StringNullableFilter | null;
  seoDescription?: StringNullableFilter | null;
  seoDescription_br?: StringNullableFilter | null;
  canonicalUrl?: StringNullableFilter | null;
  publishedAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  tags?: StringNullableListFilter | null;
  tags_br?: StringNullableListFilter | null;
  featuredImage?: FileWhereInput | null;
  author?: UserWhereInput | null;
}

export interface StringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringNullableFilter | null;
}

export interface StringNullableListFilter {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[] | null;
  hasSome?: string[] | null;
  isEmpty?: boolean | null;
}

export interface TechnicalSkillListRelationFilter {
  every?: TechnicalSkillWhereInput | null;
  some?: TechnicalSkillWhereInput | null;
  none?: TechnicalSkillWhereInput | null;
}

export interface TechnicalSkillWhereInput {
  AND?: TechnicalSkillWhereInput[] | null;
  OR?: TechnicalSkillWhereInput[] | null;
  NOT?: TechnicalSkillWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  title_br?: StringNullableFilter | null;
  description?: StringNullableFilter | null;
  description_br?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challenges?: ChallengeListRelationFilter | null;
  projectPositions?: ProjectPositionListRelationFilter | null;
  users?: UserListRelationFilter | null;
}

export interface TokenListRelationFilter {
  every?: TokenWhereInput | null;
  some?: TokenWhereInput | null;
  none?: TokenWhereInput | null;
}

export interface TokenWhereInput {
  AND?: TokenWhereInput[] | null;
  OR?: TokenWhereInput[] | null;
  NOT?: TokenWhereInput[] | null;
  id?: StringFilter | null;
  value?: StringFilter | null;
  tokenType?: EnumTokenTypeFilter | null;
  expiresAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  toguPermissions?: EnumToguActionNullableListFilter | null;
  accessTokenActions?: EnumAccessTokenActionNullableListFilter | null;
  emailStatuses?: EmailStatusListRelationFilter | null;
  user?: UserWhereInput | null;
}

export interface TransactionListRelationFilter {
  every?: TransactionWhereInput | null;
  some?: TransactionWhereInput | null;
  none?: TransactionWhereInput | null;
}

export interface TransactionWhereInput {
  AND?: TransactionWhereInput[] | null;
  OR?: TransactionWhereInput[] | null;
  NOT?: TransactionWhereInput[] | null;
  id?: StringFilter | null;
  memo?: StringNullableFilter | null;
  blockNumber?: IntNullableFilter | null;
  blockTime?: DateTimeNullableFilter | null;
  transactionHash?: StringNullableFilter | null;
  transactionIndex?: IntNullableFilter | null;
  expiresAt?: DateTimeFilter | null;
  action?: StringFilter | null;
  status?: EnumTransactionStatusFilter | null;
  args?: JsonFilter | null;
  metadata?: JsonNullableFilter | null;
  cpuUsageUs?: IntNullableFilter | null;
  netUsageBytes?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  error?: StringNullableFilter | null;
  votingCartItem?: VotingCartItemWhereInput | null;
  challengeId?: StringNullableFilter | null;
  fromAccountId?: StringNullableFilter | null;
  fromId?: StringNullableFilter | null;
  projectId?: StringNullableFilter | null;
  toAccountId?: StringNullableFilter | null;
  toId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  fromAccount?: AccountWhereInput | null;
  from?: UserWhereInput | null;
  project?: ProjectWhereInput | null;
  toAccount?: AccountWhereInput | null;
  to?: UserWhereInput | null;
}

export interface TreasuryWhereInput {
  AND?: TreasuryWhereInput[] | null;
  OR?: TreasuryWhereInput[] | null;
  NOT?: TreasuryWhereInput[] | null;
  id?: StringFilter | null;
  eosId?: IntFilter | null;
  name?: StringFilter | null;
  balance?: IntFilter | null;
  maxSupply?: IntFilter | null;
  challengesFunded?: IntFilter | null;
  challenges?: ChallengeListRelationFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface TwoFactorAuthenticationWhereInput {
  AND?: TwoFactorAuthenticationWhereInput[] | null;
  OR?: TwoFactorAuthenticationWhereInput[] | null;
  NOT?: TwoFactorAuthenticationWhereInput[] | null;
  id?: StringFilter | null;
  userId?: StringFilter | null;
  user?: UserWhereInput | null;
  secret?: StringFilter | null;
  backupCode?: StringFilter | null;
  salt?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface UserListRelationFilter {
  every?: UserWhereInput | null;
  some?: UserWhereInput | null;
  none?: UserWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  id?: StringFilter | null;
  fullName?: StringNullableFilter | null;
  email?: StringNullableFilter | null;
  username?: StringFilter | null;
  githubUsername?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  authType?: EnumUserAuthTypeFilter | null;
  state?: EnumUserStateFilter | null;
  bio?: StringNullableFilter | null;
  streetName?: StringNullableFilter | null;
  streetNumber?: StringNullableFilter | null;
  postalCode?: StringNullableFilter | null;
  city?: StringNullableFilter | null;
  country?: StringNullableFilter | null;
  phoneNumber?: StringNullableFilter | null;
  role?: EnumUserRoleFilter | null;
  gender?: EnumGenderNullableFilter | null;
  birthDate?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  isNewsletterSubscriber?: BoolFilter | null;
  twitterUrl?: StringNullableFilter | null;
  linkedInUrl?: StringNullableFilter | null;
  githubUrl?: StringNullableFilter | null;
  facebookUrl?: StringNullableFilter | null;
  instagramUrl?: StringNullableFilter | null;
  jobTitle?: StringNullableFilter | null;
  company?: StringNullableFilter | null;
  homepage?: StringNullableFilter | null;
  viewsCount?: IntFilter | null;
  projectsCount?: IntFilter | null;
  metadata?: JsonNullableFilter | null;
  settings?: JsonNullableFilter | null;
  academicExperience?: JsonNullableFilter | null;
  workExperience?: JsonNullableFilter | null;
  referralCount?: IntNullableFilter | null;
  locale?: StringNullableFilter | null;
  identityVerificationId?: StringNullableFilter | null;
  referrerId?: StringNullableFilter | null;
  coverImageFileId?: StringNullableFilter | null;
  photoImageFileId?: StringNullableFilter | null;
  indexScore?: IntNullableFilter | null;
  identityVerification?: IdentityVerificationWhereInput | null;
  notifications?: NotificationListRelationFilter | null;
  orgUsers?: OrganizationUserListRelationFilter | null;
  projects?: ProjectListRelationFilter | null;
  projectMembers?: ProjectMemberListRelationFilter | null;
  sessions?: SessionListRelationFilter | null;
  wallets?: WalletListRelationFilter | null;
  accountVerifications?: AccountVerificationListRelationFilter | null;
  backers?: BackerListRelationFilter | null;
  challenges?: ChallengeListRelationFilter | null;
  dividends?: DividendListRelationFilter | null;
  transactionsFrom?: TransactionListRelationFilter | null;
  invitesToJuryFrom?: InviteToJuryListRelationFilter | null;
  invitesToJuryTo?: InviteToJuryListRelationFilter | null;
  invitesToMentorFrom?: InviteToMentorListRelationFilter | null;
  invitesToMentorTo?: InviteToMentorListRelationFilter | null;
  invitesToOrganizationFrom?: InviteToOrganizationListRelationFilter | null;
  invitesToOrganizationTo?: InviteToOrganizationListRelationFilter | null;
  invitesToParticipantFrom?: InviteToParticipantListRelationFilter | null;
  invitesToParticipantTo?: InviteToParticipantListRelationFilter | null;
  invitesToProjects?: InviteToProjectListRelationFilter | null;
  juries?: JuryListRelationFilter | null;
  mailReceipts?: MailReceiptListRelationFilter | null;
  mailRecipients?: MailRecipientListRelationFilter | null;
  mails?: MailListRelationFilter | null;
  mentors?: MentorListRelationFilter | null;
  participants?: ParticipantListRelationFilter | null;
  projectApplications?: ProjectApplicantListRelationFilter | null;
  projectRegistrations?: ProjectRegistrationListRelationFilter | null;
  publishedInfosAccepted?: PublishInfoListRelationFilter | null;
  publishedInfosSubmitted?: PublishInfoListRelationFilter | null;
  stories?: StoryListRelationFilter | null;
  skills?: TechnicalSkillListRelationFilter | null;
  tokens?: TokenListRelationFilter | null;
  transactionsTo?: TransactionListRelationFilter | null;
  coverImageFile?: FileWhereInput | null;
  photoImageFile?: FileWhereInput | null;
  voucherRedemptions?: VoucherRedemptionListRelationFilter | null;
  referrer?: UserWhereInput | null;
  myreferrals?: UserListRelationFilter | null;
  referralsFrom?: ReferralListRelationFilter | null;
  referralsTo?: ReferralListRelationFilter | null;
  formSubmissions?: FormSubmissionListRelationFilter | null;
  forms?: FormOwnerListRelationFilter | null;
  hiringComments?: HiringCommentListRelationFilter | null;
  privateUser?: PrivateUserWhereInput | null;
  twoFactorAuthentication?: TwoFactorAuthenticationWhereInput | null;
}

export interface VideoOnDemandListRelationFilter {
  every?: VideoOnDemandWhereInput | null;
  some?: VideoOnDemandWhereInput | null;
  none?: VideoOnDemandWhereInput | null;
}

export interface VideoOnDemandWhereInput {
  AND?: VideoOnDemandWhereInput[] | null;
  OR?: VideoOnDemandWhereInput[] | null;
  NOT?: VideoOnDemandWhereInput[] | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringNullableFilter | null;
  source?: EnumVideoOnDemandSourceFilter | null;
  url?: StringFilter | null;
  thumbUrl?: StringNullableFilter | null;
  permissions?: EnumUserPermissionsNullableFilter | null;
  duration?: FloatNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
}

export interface VotingCartItemListRelationFilter {
  every?: VotingCartItemWhereInput | null;
  some?: VotingCartItemWhereInput | null;
  none?: VotingCartItemWhereInput | null;
}

export interface VotingCartItemWhereInput {
  AND?: VotingCartItemWhereInput[] | null;
  OR?: VotingCartItemWhereInput[] | null;
  NOT?: VotingCartItemWhereInput[] | null;
  id?: StringFilter | null;
  status?: EnumVotingCartItemStatusNullableFilter | null;
  amount?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  cartId?: StringFilter | null;
  transactionId?: StringNullableFilter | null;
  projectId?: StringFilter | null;
  cart?: VotingCartWhereInput | null;
  project?: ProjectWhereInput | null;
  assess?: EnumAssessResultNullableFilter | null;
  transaction?: TransactionWhereInput | null;
  criteriaAppraisals?: VotingCriteriaAppraisalListRelationFilter | null;
}

export interface VotingCartListRelationFilter {
  every?: VotingCartWhereInput | null;
  some?: VotingCartWhereInput | null;
  none?: VotingCartWhereInput | null;
}

export interface VotingCartWhereInput {
  AND?: VotingCartWhereInput[] | null;
  OR?: VotingCartWhereInput[] | null;
  NOT?: VotingCartWhereInput[] | null;
  id?: StringFilter | null;
  status?: EnumVotingCartStatusFilter | null;
  submittedAt?: DateTimeNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  stepId?: StringNullableFilter | null;
  hiringStepId?: StringNullableFilter | null;
  juryId?: StringFilter | null;
  jury?: JuryWhereInput | null;
  step?: ChallengeStepWhereInput | null;
  hiringStep?: HiringStepWhereInput | null;
  items?: VotingCartItemListRelationFilter | null;
}

export interface VotingCriteriaAppraisalListRelationFilter {
  every?: VotingCriteriaAppraisalWhereInput | null;
  some?: VotingCriteriaAppraisalWhereInput | null;
  none?: VotingCriteriaAppraisalWhereInput | null;
}

export interface VotingCriteriaAppraisalWhereInput {
  AND?: VotingCriteriaAppraisalWhereInput[] | null;
  OR?: VotingCriteriaAppraisalWhereInput[] | null;
  NOT?: VotingCriteriaAppraisalWhereInput[] | null;
  id?: StringFilter | null;
  score?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  criteriaId?: StringNullableFilter | null;
  votingCartItemId?: StringNullableFilter | null;
  criteria?: VotingCriteriaWhereInput | null;
  votingCartItem?: VotingCartItemWhereInput | null;
}

export interface VotingCriteriaGroupListRelationFilter {
  every?: VotingCriteriaGroupWhereInput | null;
  some?: VotingCriteriaGroupWhereInput | null;
  none?: VotingCriteriaGroupWhereInput | null;
}

export interface VotingCriteriaGroupWhereInput {
  AND?: VotingCriteriaGroupWhereInput[] | null;
  OR?: VotingCriteriaGroupWhereInput[] | null;
  NOT?: VotingCriteriaGroupWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringFilter | null;
  challenge?: ChallengeWhereInput | null;
  challengeStep?: ChallengeStepListRelationFilter | null;
  hiringSteps?: HiringStepListRelationFilter | null;
  criterias?: VotingCriteriaListRelationFilter | null;
}

export interface VotingCriteriaListRelationFilter {
  every?: VotingCriteriaWhereInput | null;
  some?: VotingCriteriaWhereInput | null;
  none?: VotingCriteriaWhereInput | null;
}

export interface VotingCriteriaResumeListRelationFilter {
  every?: VotingCriteriaResumeWhereInput | null;
  some?: VotingCriteriaResumeWhereInput | null;
  none?: VotingCriteriaResumeWhereInput | null;
}

export interface VotingCriteriaResumeWhereInput {
  AND?: VotingCriteriaResumeWhereInput[] | null;
  OR?: VotingCriteriaResumeWhereInput[] | null;
  NOT?: VotingCriteriaResumeWhereInput[] | null;
  id?: StringFilter | null;
  score?: FloatFilter | null;
  criteriaId?: StringFilter | null;
  resumeId?: StringFilter | null;
  weight?: IntFilter | null;
  resume?: VotingResumeWhereInput | null;
  criteria?: VotingCriteriaWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface VotingCriteriaWhereInput {
  AND?: VotingCriteriaWhereInput[] | null;
  OR?: VotingCriteriaWhereInput[] | null;
  NOT?: VotingCriteriaWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  description?: StringNullableFilter | null;
  weight?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  criteriaGroupId?: StringFilter | null;
  criteriaGroup?: VotingCriteriaGroupWhereInput | null;
  appraisals?: VotingCriteriaAppraisalListRelationFilter | null;
  votingResumes?: VotingCriteriaResumeListRelationFilter | null;
}

export interface VotingResumeListRelationFilter {
  every?: VotingResumeWhereInput | null;
  some?: VotingResumeWhereInput | null;
  none?: VotingResumeWhereInput | null;
}

export interface VotingResumeWhereInput {
  AND?: VotingResumeWhereInput[] | null;
  OR?: VotingResumeWhereInput[] | null;
  NOT?: VotingResumeWhereInput[] | null;
  id?: StringFilter | null;
  participantId?: StringFilter | null;
  hiringStepId?: StringFilter | null;
  participant?: ParticipantWhereInput | null;
  step?: HiringStepWhereInput | null;
  type?: EnumEvaluationTypeFilter | null;
  goCount?: IntFilter | null;
  noGoCount?: IntFilter | null;
  voteCounts?: IntFilter | null;
  criteriaScore?: FloatFilter | null;
  criteriaResumes?: VotingCriteriaResumeListRelationFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface VoucherListRelationFilter {
  every?: VoucherWhereInput | null;
  some?: VoucherWhereInput | null;
  none?: VoucherWhereInput | null;
}

export interface VoucherRedemptionListRelationFilter {
  every?: VoucherRedemptionWhereInput | null;
  some?: VoucherRedemptionWhereInput | null;
  none?: VoucherRedemptionWhereInput | null;
}

export interface VoucherRedemptionWhereInput {
  AND?: VoucherRedemptionWhereInput[] | null;
  OR?: VoucherRedemptionWhereInput[] | null;
  NOT?: VoucherRedemptionWhereInput[] | null;
  id?: StringFilter | null;
  redemptionAt?: DateTimeNullableFilter | null;
  status?: EnumVoucherReddemStatusFilter | null;
  quantity?: IntNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: StringFilter | null;
  voucherId?: StringFilter | null;
  user?: UserWhereInput | null;
  voucher?: VoucherWhereInput | null;
}

export interface VoucherWhereInput {
  AND?: VoucherWhereInput[] | null;
  OR?: VoucherWhereInput[] | null;
  NOT?: VoucherWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  description?: StringNullableFilter | null;
  count?: IntFilter | null;
  maxCount?: IntFilter | null;
  code?: StringFilter | null;
  validFrom?: DateTimeFilter | null;
  expiresAt?: DateTimeFilter | null;
  status?: EnumVoucherStatusFilter | null;
  type?: EnumVoucherTypeFilter | null;
  quantityPerReedem?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeStepId?: StringNullableFilter | null;
  challengeStep?: ChallengeStepWhereInput | null;
  challengeId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  redemptions?: VoucherRedemptionListRelationFilter | null;
}

export interface WalletListRelationFilter {
  every?: WalletWhereInput | null;
  some?: WalletWhereInput | null;
  none?: WalletWhereInput | null;
}

export interface WalletWhereInput {
  AND?: WalletWhereInput[] | null;
  OR?: WalletWhereInput[] | null;
  NOT?: WalletWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumWalletTypeFilter | null;
  address?: StringNullableFilter | null;
  eosAccountName?: StringNullableFilter | null;
  balance?: IntFilter | null;
  challengeId?: StringNullableFilter | null;
  projectId?: StringNullableFilter | null;
  userId?: StringNullableFilter | null;
  accountId?: StringNullableFilter | null;
  account?: AccountWhereInput | null;
  user?: UserWhereInput | null;
  project?: ProjectWhereInput | null;
  challenge?: ChallengeWhereInput | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
}

export interface WebhookCallListRelationFilter {
  every?: WebhookCallWhereInput | null;
  some?: WebhookCallWhereInput | null;
  none?: WebhookCallWhereInput | null;
}

export interface WebhookCallWhereInput {
  AND?: WebhookCallWhereInput[] | null;
  OR?: WebhookCallWhereInput[] | null;
  NOT?: WebhookCallWhereInput[] | null;
  id?: StringFilter | null;
  state?: EnumWebhookStateFilter | null;
  type?: EnumWebhookTypeFilter | null;
  url?: StringFilter | null;
  status?: IntNullableFilter | null;
  statusText?: StringNullableFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  challengeId?: StringNullableFilter | null;
  formId?: StringNullableFilter | null;
  inviteToJuryId?: StringNullableFilter | null;
  inviteToParticipantId?: StringNullableFilter | null;
  challenge?: ChallengeWhereInput | null;
  form?: FormWhereInput | null;
  inviteToJury?: InviteToJuryWhereInput | null;
  inviteToParticipant?: InviteToParticipantWhereInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
