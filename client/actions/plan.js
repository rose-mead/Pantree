
export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = "SET_PLAN"
export const UPDATE_DAY_RECIPE = "UPDATE_DAY_RECIPE"
export const REMOVE_DAY_RECIPE = "REMOVE_DAY_RECIPE"

import { updatePlanApi } from '../apis/plans'

// Get plan for Global state
export const getPlan = (plan) => {
  return {
    Type: GET_PLAN,
    plan,
  }
}

// Set the plan in Global state
export const setPlan = (plan) => {
  return {
    Type: SET_PLAN,
    plan,
  }
}

// Adds to the plan day recipes
export const addDayRecipe = (recipeId, selectedDay) => {
  return {
    Type: UPDATE_DAY_RECIPE,
    day: {
      selectedDay,
      recipeId
    }
  }
}

// Removes from the plan day recipes
export const removeDayRecipe = (recipeId, selectedDay) => {
  return {
    Type: REMOVE_DAY_RECIPE,
    day: {
      selectedDay,
      recipeId
    }
  }
}

// Save the plan to the DB
export const savePlan = (plan) => {
  return (dispatch) => {
    updatePlanApi(plan)
    .then(()=>{
      dispatch(getPlan(plan))
    })
    .catch(err => {
      console.log("API has Broken")
    })
  }
}