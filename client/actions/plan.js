
export const GET_PLAN = 'GET_PLAN'
export const SET_PLAN = "SET_PLAN"
export const UPDATE_DAY_RECIPE = "UPDATE_DAY_RECIPE"
export const REMOVE_DAY_RECIPE = "REMOVE_DAY_RECIPE"

import { updatePlanApi, getPlanApi } from '../apis/plans'

// Get plan for Global state
export const getPlan = (id, plan) => {
  return {
    type: GET_PLAN,
    id,
    plan,
  }
}

// Set the plan in Global state
export const setPlan = (plan) => {
  return {
    type: SET_PLAN,
    plan,
  }
}

// Adds to the plan day recipes
export const addDayRecipe = (recipeDetails, selectedDay) => {
  return {
    type: UPDATE_DAY_RECIPE,
    recipeDetails: recipeDetails,
    selectedDay: selectedDay
  }
}

// Removes from the plan day recipes
export const removeDayRecipe = (recipeId, selectedDay) => {
  return {
    type: REMOVE_DAY_RECIPE,
    selectedDay: selectedDay,
    recipeId: recipeId
  }
}

// Save the plan to the DB
export const savePlan = (plan) => {
  return (dispatch) => {
    updatePlanApi(plan)
      .then(() => {
        dispatch(getPlan(plan))
      })
      .catch(err => {
        console.log("API has Broken")
      })
  }
}


export const fetchPlan = (id) => {
  console.log('fetchj');
  
  return (dispatch) => {
    getPlanApi(id)
      .then((plan) => {
        // console.log(plan);
        
        dispatch(getPlan(id, plan))
      })
      .catch(err => {
        console.log("API has Broken", err)
      })
  }
}