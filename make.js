import { dir2array } from "https://js.sabae.cc/dir2array.js";

const res = await dir2array("src");
const fns = new Set();
res.forEach(f => fns.add(f.substring(f.lastIndexOf("/"))));
console.log(fns); // Set { "/24px.svg", "/20px.svg", "/36px.svg", "/18px.svg" }

// remove duplicated
const unique = {};
res.forEach(f => {
  const n = f.lastIndexOf("/");
  const size = f.substring(n);
  const name = f.substring(0, n);
  const hit = unique[name];
  if (!hit) {
    unique[name] = [size];
  } else {
    unique[name].push(size);
  }
});

for (const name in unique) {
  const sizes = unique[name];
  const max = sizes.reduce((n, cur) => Math.max(n, parseInt(cur.match(/(\d+)/)[1])), 0);
  //console.log(name, max, sizes.length);
  /*
  if (max != 24) {
    console.log(name, max, sizes); // 36px is only 1, av/replay_circle_filled/materialicons, also 24px
  }
  */
  for (const size of sizes) {
    if (size.indexOf("24px") == -1) {
      console.log("remove", name + size);
      await Deno.remove("src/" + name + size);
    }
  }
}

const res2 = await dir2array("src");
await Deno.writeTextFile("icons.json", JSON.stringify(res2, null, 2));
console.log(res2.length);
