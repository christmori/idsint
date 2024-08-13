function updateAnimationFrame() {
    // Some expensive calculation or operation
    for (let i = 0; i < 1000000; i++) {
        // Simulating a heavy task
    }

    // Inserting a delay or heavy computation directly within the animation loop
    // can cause the compiler to struggle with optimizations, leading to a visible
    // "glitch" in animations.
    ///
    /// the compiler, i.e. cause a visible "glitch" in animations.

    requestAnimationFrame(updateAnimationFrame); // Continue the animation loop
}

// Start the animation
requestAnimationFrame(updateAnimationFrame);
