import { PermissionCreatedHandler } from "./created-permission.handler";
import { PermissionRemovedHandler } from "./removed-permission.handler";
import { PermissionUpdatedHandler } from "./updated-permission.handler";

export const EventHandlers = [
  PermissionCreatedHandler,
  PermissionRemovedHandler,
  PermissionUpdatedHandler,
];
