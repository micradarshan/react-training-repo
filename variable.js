function variableScopeDemo() {
  if (true) {
    var x = 10; // var is function-scoped
    let y = 20; // let is block-scoped
    const z = 30; // const is block-scoped

    console.log("Inside block:");
    console.log("x (var):", x);
    console.log("y (let):", y);
    console.log("z (const):", z);
  }

  console.log("Outside block:");
  console.log("x (var):", x);
}

variableScopeDemo();
