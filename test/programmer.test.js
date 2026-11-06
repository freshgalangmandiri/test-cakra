import { filterDuplicate, findDuplicateNumber, getUid, mergeArray } from "..";
import data from "../data/data-peserta.json" with { type: "json" };
import { describe, it, expect } from "vitest";

describe("Soal No. 1", () => {
  it("Merge Array", () => {
    const result = mergeArray([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    expect(result)?.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
describe("Soal No. 2", () => {
  it("Get Uid 1", () => {
    const result = getUid("/artikel/pelatihan-ahli-k3-listrik-o2ao3nsxw");
    expect(result)?.toEqual("o2ao3nsxw");
  });

  it("Get Uid 2", () => {
    const result = getUid("/artikel/pelatihan-pemadam-kebakaran-ndj82js72ja8s");
    expect(result)?.toEqual("ndj82js72ja8s");
  });
});
describe("Soal No. 3", () => {
  it("Find Duplicate Number", () => {
    const result = findDuplicateNumber([1, 2, 3, 4, 3, 6, 4, 8, 6]);
    expect(result)?.toEqual([3, 4, 6]);
  });
});
describe("Soal No. ", () => {
  it("ilter Duplicate Object", () => {
    const result = filterDuplicate(data);
    expect(result?.length)?.toEqual(15);
  });
});
