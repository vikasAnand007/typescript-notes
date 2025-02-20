interface Iuser {
  name: string;
  age: number;
  address: string;
}

// If we want to make another type with all the properties optional

// ❌ not recommended
type OptionalUser1 = {
  name?: string;
  age?: number;
  address?: string;
};

// ✅ recommended
type OptionalUser2 = Partial<Iuser>;
