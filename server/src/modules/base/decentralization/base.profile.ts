import {
    PERMISSION_CREATE_COMMON, PERMISSION_CREATE_PRODUCT, PERMISSION_CREATE_USER,
    PERMISSION_READ_ALL, PERMISSION_READ_COMMON, PERMISSION_READ_PRODUCT, PERMISSION_READ_USER,
    PERMISSION_REMOVE_COMMON, PERMISSION_REMOVE_PRODUCT, PERMISSION_REMOVE_USER,
    PERMISSION_SUPERADMIN, PERMISSION_UPDATE_COMMON, PERMISSION_UPDATE_PRODUCT,
    PERMISSION_UPDATE_USER
} from './base.roles';

const SUPERADMIN = {
  profileId: 'superadmin',
  display: 'Quản trị',
  description: 'superadmin',
  roleIds: [PERMISSION_SUPERADMIN],
};

const CUSTOMER = {
  profileId: 'manager',
  display: 'Quản lý',
  roleIds: [
    PERMISSION_CREATE_USER,
    PERMISSION_UPDATE_USER,
    PERMISSION_REMOVE_USER,
    PERMISSION_READ_USER,
    PERMISSION_READ_PRODUCT,
    PERMISSION_READ_COMMON,
  ],
};

const EMPLOYEE = {
  profileId: 'employee',
  display: 'Nhân viên',
  roleIds: [
    PERMISSION_CREATE_PRODUCT,
    PERMISSION_UPDATE_PRODUCT,
    PERMISSION_REMOVE_PRODUCT,
    PERMISSION_READ_PRODUCT,

    PERMISSION_CREATE_COMMON,
    PERMISSION_UPDATE_COMMON,
    PERMISSION_REMOVE_COMMON,
    PERMISSION_READ_COMMON,
  ],
};

const VIEWER = {
  profileId: 'viewer',
  display: 'Người xem',
  roleIds: [PERMISSION_READ_ALL],
};

export const profiles = [SUPERADMIN, CUSTOMER, EMPLOYEE, VIEWER];