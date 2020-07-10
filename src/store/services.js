import axios from "axios"
import {
  ALINE_GAME_PLUGIN_USERNAME,
  ALINE_GAME_PLUGIN_PASSWORD
} from "react-native-dotenv"
const alineGamePlugin = axios.create({
  baseURL: "https://alaisgomes.info/api",
  auth: {
    username: ALINE_GAME_PLUGIN_USERNAME,
    password: ALINE_GAME_PLUGIN_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobileAppAlineAPI = axios.create({
  baseURL: "https://mobile-app-aline-dev-7397.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_games_list() {
  return alineGamePlugin.get(`/games`)
}
function get_games_read(id) {
  return alineGamePlugin.get(`/games/`)
}
function api_v1_customtext_list() {
  return mobileAppAlineAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobileAppAlineAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobileAppAlineAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobileAppAlineAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return mobileAppAlineAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobileAppAlineAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobileAppAlineAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobileAppAlineAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return mobileAppAlineAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobileAppAlineAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return mobileAppAlineAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobileAppAlineAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobileAppAlineAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobileAppAlineAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobileAppAlineAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobileAppAlineAPI.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return mobileAppAlineAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobileAppAlineAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return mobileAppAlineAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobileAppAlineAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobileAppAlineAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  get_games_list,
  get_games_read,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
