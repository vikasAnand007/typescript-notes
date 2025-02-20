// As the name suggest, "Exclude" is used to exclude some literals from a set of litrals

type TStatus = "success" | "pending" | "error" | "warning";
type TAllowedStatus = Exclude<TStatus, "error" | "warning">;

const hasAccess = (status: TAllowedStatus) => {
  // do something
};

hasAccess("pending"); // allowed
// hasAccess("error"); // not-allowed
