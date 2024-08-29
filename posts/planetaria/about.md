---
title: About
linked: true
---

![Planetaria](/images/planetaria/splash.png)

# Planetaria: Solar System Simulator

##### Purpose: To provide an engaging and educational experience.

Planetaria is an interactive simulator of the Solar System. 
Once a simple list of planets with some properties, it has now grown 
into a massive 3D and AR simulation of planets and moons.
Its primary focus is education, allowing users to freely explore the
Solar System in an unguided manner, and learn about all of the celestial
objects within.

##### Audience: Novice, Intermediate, Professional.

Each experience group benefits from using Planetaria.
The novice can learn about how the Solar System is structured, plus some basic info about the different worlds.
The intermediate can learn new facts and details about each planet, as well as the different moons which may be unfamiliar.
For the professional, Planetaria offers a real-time reference for the positions and rotations of the planets and moons.

![Planetaria](/images/planetaria/header.png)

# Design Elements

I created Planetaria originally in fall 2020. It was simply a list of
planets and moons with some pictures and some properties about each one.

![Planetaria](/images/planetaria/design1.png)

In this version of Planetaria, everything was simple. The app
acted as an encyclopedia – a catalog of astronomical objects.

The design was meant to be simple and clean, with elements arranged
into lists, and a large image that would recede into the top right
corner once you scrolled down.

### Simulator

My goal was to make Planetaria into a simulator, where you could
actually visualize and interact with astronomical objects.

![Planetaria](/images/planetaria/design2.png)

I decided to make a map-like interface with navigation controls
overlaying the main content.

Since the model was meant to be to-scale, essentially nothing
could be visible, since the planets are incredibly small with respect
to the distance between them.

![Planetaria](/images/planetaria/preview2.png)

### Orbits

To solve this problem, I created overlays – points that always appear
the same size that indicate an object's presence, and orbit trails
that are emitted behind them.

![Planetaria](/images/planetaria/design3.png)

Orbits are kept at the same thickness no matter the current magnification, 
so they're visible at all scales. They're also given unique colors to identify objects more easily.

### 3D Models

To complete the solar system simulation, some 3D models were needed. These were able to add an extra
touch of realism to the scene.

![Planetaria](/images/planetaria/preview3.png)

I scaled them to be their true sizes so you could get perspectives like this one above of a moon
orbiting a planet that dominates its sky. 

### Augmented Reality

I also wanted the simulation to blend seamlessly with the real world. This meant bringing the 
solar system into the real world through AR.

![Planetaria](/images/planetaria/design4.png)

# UI Design Process

![Planetaria](/images/planetaria/design10.png)

### Layout

Since I wanted users to be able to see the celestial objects in the simulation, but also see 
information, photos, and properties about each object, I had to create overlay views – and in
a different way for each device.

On iPhone, a sheet sits at the bottom of the view, and can be slid up to see more info.

![Planetaria](/images/planetaria/design5.png)

On iPad, the pane is permanently fixed to the side of the screen. You can view the simulation
and the information at the same time, taking full advantage of the large screen real estate.

![Planetaria](/images/planetaria/design6.png)

On Apple Vision Pro, a completely different design thinking is needed. The navigation pane is 
a separate window, and it can be moved around **within** the Solar System.

![Planetaria](/images/planetaria/preview4.png)

### Navigation

It's objectively very difficult to move through the Solar System. You need to know exactly where
to go, and since the targets are so small, this task seems hopeless.

It's important to strike a **balance between *freedom to explore* and *ease of navigation***.
Since the Solar System is mostly empty space, this presents a problem.
We need gestures that are fluid and natural, to make the user feel in control,
but there also needs to be a simple way to navigate between objects and systems.

The solution: the **Orbit-System-Surface** selector.

![Planetaria](/images/planetaria/design7.png)

This navigator allows you to move between the orbit of an object, its local system, and its surface.
It's essential to exploration among such a large range of orders of magnitude, and it makes it
so much easier to get to what you want to see.

![Planetaria](/images/planetaria/design8.png)

Multiple modes of navigation proved to be essential to the user interaction within the app.
Users have the freedom to move around with zoom and rotation gestures – which is essential for
true exploration and getting a sense of where everything is – but the selector buttons offer a 
simple and quick way to navigate to a desired location.

### Accessibility

It's important that everyone has a good experience using Planetaria. With dynamic type, the content
scales and rearranges in order to accomodate larger text.

![Planetaria](/images/planetaria/design9.png)

# Where We Are Now

### Full Immersion

With Apple Vision Pro, Planetaria is able to be fully immersive. You can enter the Solar System
and actually feel like it's all around you. It's so hard to describe – you just have to try
it for yourself. This type of app feels right at home on Vision Pro. It's like they were made for each other.

![Planetaria](/images/planetaria/preview1.png)

Bringing Planetaria to Apple Vision Pro has been a dream come true – it's gone from just a simple 
list of planets, to now a fully immersive simulator. This is what I always hoped it would turn out to be.

And I still have more plans for Planetaria's future!