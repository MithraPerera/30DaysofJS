# Overrview

Create a clock that is implement with Vanilla JS and styled with CSS.

# Lessons Learned

- On the transform property we could add a rotate to turn the hands of the clock but it turns it in the middle of the hand.
  So instead, we use transform-orgin which sets where on the object it will rotate from. Default is 50%. 100% will make the pivot point on the right side.

- To get the ticking effect we add a transition-timing-function and play with the cubic-bezier curve in the chrome devtools and copy the resulting cubic-bezier settings into our code.

- Mainly, in this mini project we are getting the hour, minute and seconds using Date() and then translating that onto degrees of a clock and then applying a transform to move the hands every second.

# Bug Fix

- To fix the transition issue where it glitches when the second hand reaches 0, we remove the transition from the hand class whenever the second hand reaches 90 degrees.
