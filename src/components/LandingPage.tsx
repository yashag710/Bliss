import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Compass, Lightbulb, Users, Award, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Student Compass</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#impact" className="text-sm font-medium transition-colors hover:text-primary">
              Impact
            </Link>
            <Link href="#team" className="text-sm font-medium transition-colors hover:text-primary">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#volunteer">Volunteer</Link>
            </Button>
            <Button asChild>
              <Link href="#get-help">Get Help</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Guiding Your Journey Through College & Beyond
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Student Compass provides personalized guidance, mentorship, and counseling to help college students
                    navigate academic challenges and life decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#get-help">Get Guidance</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Students discussing with a counselor"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Student Compass was founded with a simple yet powerful mission: to ensure no college student feels
                  lost or alone in making important life decisions. We provide the guidance, resources, and support
                  network students need to thrive during college and confidently step into their future.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Students in a workshop setting"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Personalized Guidance</h3>
                        <p className="text-muted-foreground">
                          `We believe in tailored approaches that address each student $apos s unique challenges and
                          aspirations.`
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Holistic Support</h3>
                        <p className="text-muted-foreground">
                          Our programs address academic, career, and personal development needs.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Lifelong Skills</h3>
                        <p className="text-muted-foreground">
                          We equip students with decision-making tools that serve them throughout their lives.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Help</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive services are designed to support students at every stage of their college journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Academic Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get help with course selection, study strategies, time management, and navigating academic
                    challenges.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Explore career paths, prepare for interviews, build your resume, and connect with industry
                    professionals.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Life Skills Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Develop essential skills in financial literacy, communication, leadership, and personal well-being.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mentorship Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with experienced mentors who provide personalized guidance and share their professional
                    journey.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Transition Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Navigate the transition from college to professional life with confidence through our specialized
                    programs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've helped thousands of students find their path and achieve their goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-8">
                <span className="text-4xl font-bold text-primary">5,000+</span>
                <span className="text-xl font-medium">Students Guided</span>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-8">
                <span className="text-4xl font-bold text-primary">200+</span>
                <span className="text-xl font-medium">Partner Colleges</span>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-8">
                <span className="text-4xl font-bold text-primary">92%</span>
                <span className="text-xl font-medium">Success Rate</span>
              </div>
            </div>
            <div className="mt-16">
              <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="italic text-muted-foreground">
                        "Student Compass helped me navigate the overwhelming process of choosing a career path. My
                        mentor provided invaluable guidance that led me to discover my passion for environmental
                        science."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-muted h-10 w-10"></div>
                        <div>
                          <p className="font-medium">Sarah J.</p>
                          <p className="text-sm text-muted-foreground">Biology Major, Class of 2023</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="italic text-muted-foreground">
                        "The financial literacy workshops completely changed how I manage my money. I'm graduating with
                        less debt and a solid plan for my future finances thanks to Student Compass."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-muted h-10 w-10"></div>
                        <div>
                          <p className="font-medium">Michael T.</p>
                          <p className="text-sm text-muted-foreground">Business Major, Class of 2022</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated professionals behind Student Compass.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold">Dr. Emily Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder & Executive Director</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold">Prof. James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Academic Director</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold">Maria Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Career Counseling Lead</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold">David Thompson</h3>
                  <p className="text-sm text-muted-foreground">Mentorship Program Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section id="get-help" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">For Students</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to find your direction?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step toward a clearer future. Our team is ready to support you through your college
                  journey and beyond.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#book-session">
                      Book a Session <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  For Volunteers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Make an impact as a mentor</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Share your experience and expertise to help shape the next generation of professionals. Join our
                  volunteer network.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild variant="outline" size="lg">
                    <Link href="#volunteer" id="volunteer">
                      Become a Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We're here to help. Reach out to our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">info@studentcompass.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-muted-foreground">123 Education Lane, College Town, CT 10101</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Type your message here."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Student Compass</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Student Compass NGO. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

