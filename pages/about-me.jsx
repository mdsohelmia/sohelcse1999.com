import React from "react";

const AboutMe = () => {
  return (
    <div className="px-48 container mx-auto py-8">
      <h1>About me</h1>
      <p>
        Hi. My name is Raul and I am an individual passionate about building the
        decentralized web and contributing to a future where decentralized
        technology swings the pendulum back to the original promise of the
        Internet and empowers personal freedom.
      </p>
      <div>
        Born and raised in San Pedro Sula, Honduras, I studied Computer Science
        at Harvard University, where I learned how important it is to harness
        the power of machines to build technology the world can benefit from. I
        started a company called Prysmatic Labs with my co-founder Preston Van
        Loon working on implementing the core of Ethereum blockchain protocol,
        including its major scalability upgrades using cutting-edge research
        such as Proof of Stake and Sharding. My team has received significant
        funding to achieve our vision. We have created a project named Prysm
        fully open source as a Go implementation of Ethereum Proof of Stake.
        Today, our software is the most popular one to run the Ethereum
        blockchain, powering its consensus engine. While at Harvard, I received
        the Thiel Fellowship: a $100k grant that allowed me to take off from
        school to pursue my passions. Thanks to the fellowship, I got into
        Ethereum and now I am a blockchain developer interested in building core
        improvements to the protocol. My company, Prysmatic Labs, was acquired
        by Offchain Labs, the team behind the leading scaling solution for
        Ethereum called Arbitrum. I am currently based in Atlanta, where I enjoy
        spending time in nature with my awesome wife Jiaqi and our cat, Buster.
      </div>
    </div>
  );
};

export default AboutMe;
