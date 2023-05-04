import { createSelector } from "reselect";

//este esta seleccionando categories que esta en el store
const selectCategoryReducer = (state) => state.categories;

//aca se va a ejecutar el segundo argumento de la funcion si la capa categories es
//diferente al estado anterior
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories)=>categories.isLoading
)