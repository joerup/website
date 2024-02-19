
![Planetaria](/images/planetaria/splash.png)

# Welcome to Planetaria
Planetaria is an interactive simulator of the Solar System. 
Once a simple list of planets with some properties, it has now grown 
into a massive 3D and AR simulation of planets and moons.

![Planetaria](/images/planetaria/header.png)

# Beginnings

I created Planetaria originally in fall 2020. It was simply a list of
planets and moons with some pictures and some properties about each one.

![Planetaria](/images/planetaria/design1.png)

In this version of Planetaria, everything was simple. The app
acted as an encyclopedia – a catalog of astronomical objects.

The design was meant to be simple and clean, with elements arranged
into lists, and a large image that would recede into the top right
corner once you scrolled down.

# Simulator

My goal was to make Planetaria into a simulator, where you could
actually visualize and interact with astronomical objects.

![Planetaria](/images/planetaria/design2.png)

I decided to make a map-like interface with navigation controls
overlaying the main content.

Since the model was meant to be to-scale, essentially nothing
could be visible, since the planets are incredibly small with respect
to the distance between them.

![Planetaria](/images/planetaria/preview2.png)

# Orbits

To solve this problem, I created overlays – points that always appear
the same size that indicate an object's presence, and orbit trails
that are emitted behind them.

![Planetaria](/images/planetaria/design3.png)

Orbits are kept at the same thickness no matter the current magnification, 
so they're visible at all scales. They're also given unique colors to identify objects more easily.

# 3D Models

To complete the solar system simulation, some 3D models were needed. These were able to add an extra
touch of realism to the scene.

![Planetaria](/images/planetaria/preview3.png)

I scaled them to be their true sizes so you could get perspectives like this one above of a moon
orbiting a planet that dominates its sky. 

# AR Mode

I also wanted the simulation to blend seamlessly with the real world. This meant bringing the 
solar system into the real world through AR.

![Planetaria](/images/planetaria/design4.png)

# Layout

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

# Navigation

It's objectively very difficult to move through the Solar System. You need to know exactly where
to go, and since the targets are so small, this task seems hopeless.

Enter the **Orbit-System-Surface** selector.

![Planetaria](/images/planetaria/design7.png)

This navigator allows you to move between the orbit of an object, its local system, and its surface.
It's essential to exploration among such a large range of orders of magnitude, and it makes it
so much easier to get to what you want to see.

![Planetaria](/images/planetaria/design8.png)

# Full Immersion

With Apple Vision Pro, Planetaria is able to be fully immersive. You can enter the Solar System
and actually feel like it's all around you. It's so hard to describe – you just have to try
it for yourself. This type of app feels right at home on Vision Pro. It's like they were made for each other.

![Planetaria](/images/planetaria/preview1.png)

Bringing Planetaria to Apple Vision Pro has been a dream come true – it's gone from just a simple 
list of planets, to now a fully immersive simulator. This is what I always hoped it would turn out to be.

And I still have more plans for Planetaria's future!