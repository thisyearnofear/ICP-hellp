import Buffer "mo:base/Buffer";

actor {
  private stable var submittedNames : [Text] = [];
  private let namesBuffer = Buffer.Buffer<Text>(0);

  public shared func greet(name : Text) : async Text {
    namesBuffer.add(name);
    submittedNames := Buffer.toArray(namesBuffer);
    return "Hello, " # name # "!";
  };

  public query func getSubmittedNames() : async [Text] {
    return submittedNames;
  };
};