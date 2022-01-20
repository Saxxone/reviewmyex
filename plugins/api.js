import User from "@/api/user";

export default (context, inject) => {
  // Initialize API factories
  const apiFactory = {
    user: User(context.$axios),
  };

  // Inject $api
  inject("api", apiFactory);
};
