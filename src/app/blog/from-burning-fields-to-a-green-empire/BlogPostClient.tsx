"use client";

import { motion } from "framer-motion";

export default function BlogPostClient() {
  return (
    <div className="bg-white text-brand-dark-neutral">
      <article>
        {/* Article Header */}
        <header className="bg-[#f8faf9] pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-dark-green !leading-tight mb-4"
            >
              From the Burning Fields to a Green Empire: My Journey to Save Rural India
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-brand-dark-neutral/80"
            >
              The personal story of our founder, Gopal Jee, on turning agricultural waste into a national treasure.
            </motion.p>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 prose lg:prose-lg prose-headings:text-brand-dark-green prose-headings:font-semibold prose-a:text-brand-accent-brown hover:prose-a:text-brand-dark-green">
          <p>
            In many parts of rural India, the end of every harvest still looks like the end of the world—fields on fire, skies turned grey, and the smell of smoke choking entire villages. For most people, this is just &ldquo;how things are done&rdquo; to clear crop residue. For me, as a farmer&amp;apos;s son, every burning field feels like a wound to the soil that raised me.
          </p>
          <p>
            This is the story of how I decided to turn that &ldquo;waste&rdquo; into &ldquo;wealth&rdquo;—how converting <strong>agricultural waste to paper pulp</strong> became my life&amp;apos;s mission, and how <strong>JEE Origin Pvt Ltd</strong> is building a <strong>circular economy in agriculture</strong> that serves farmers, protects forests, and offers real <strong>stubble burning alternatives</strong> for a smoke-free rural India.
          </p>

          <hr className="my-12" />

          <h2>The Sight that Changed Everything</h2>
          <p>
            I still remember the smell of smoke hanging over the fields during harvest season. In the heart of rural India, where the earth is supposed to provide life, I saw it being choked. I saw farmers—the very backbone of our nation—standing helplessly as they set fire to mountains of agricultural waste.
          </p>
          <p>
            To the world, it was just <em>“kachra”</em> (waste). To the farmers, it was a burden they had to clear as fast as possible. But to me, it looked like a wasted opportunity, a burning treasure that could have powered a thousand homes and saved a million trees.
          </p>
          <p>
            My name is <strong>Gopal Jee</strong>, and my story isn&apos;t about science in a lab. It&amp;rsquo;s about the promise I made to the soil of my country: that no farmer would ever have to burn their hard work again.
          </p>

          <h2>The Heart of a Farmer’s Son</h2>
          <p>
            I didn&apos;t grow up in a world of luxury; I grew up in the rhythm of the seasons. I grew up watching the monsoon decide our mood, the soil decide our income, and the market decide our fate.
          </p>
          <p>
            I saw my father and his neighbours toil day and night, only to be left with tons of biomass waste that nobody wanted. This waste wasn&apos;t just an environmental problem; it was a symbol of how we treat our agriculture. We take the fruit, the grain, or the fibre, and we discard the rest as if it has no soul.
          </p>
          <p>
            I couldn&apos;t accept that. I believed that if nature created something, it must have a purpose. That simple belief became the foundation of <strong>JEE Origin Pvt Ltd</strong>. I decided to dedicate my life to finding the &quot;wealth&quot; hidden in the &quot;waste&quot; of our fields.
          </p>

          <h2>The Struggle: A Young Man Against the Norms</h2>
          <p>
            When I first started talking about turning agricultural waste into high-value paper pulp, people laughed. They told me I was too young. They said the paper industry belongs to giants who cut down forests and control everything from raw materials to markets.
          </p>
          <p>
            Many advised me, &ldquo;Gopal, why don&apos;t you just get a comfortable job? Why do you want to play with waste?&rdquo;
          </p>
          <p>
            But every time I saw a farmer struggling to clear his field, or saw thick black smoke rising on the horizon, my resolve grew stronger. I realised that innovation isn't just about inventing something new; it’s about solving a pain that nobody else wants to touch.
          </p>
          <p>
            I spent years under the harsh sun, travelling from one village to another, collecting what others threw away, and proving that the &quot;waste&quot; of a farm is the &quot;gold&quot; of an industry. I was just one young man against the norms, but I had the strength of my roots behind me.
          </p>

          <h2>Why Agricultural Waste Matters</h2>
          <p>
            India is a land of abundance, but we are also a land of immense waste. Every year, <strong>millions of tons of agricultural residue</strong>—the stalks, the stems, the husks—are generated and then largely ignored.
          </p>
          <ul>
            <li><strong>The Environmental Cost:</strong> When this waste is burnt, it releases toxins and particulate matter into the air our children breathe. When it is left to rot in the wrong way, it can pollute the soil and water.</li>
            <li><strong>The Human Cost:</strong> The farmer, already under financial pressure, often spends his limited income just to get rid of this residue. What should have been a resource becomes a burden.</li>
          </ul>
          <p>
            This is why <strong>agricultural residue management in India</strong> is not just a technical topic—it is a social, economic, and environmental necessity.
          </p>

          <h2>Why Agriculture Waste? The Soul of JEE Origin</h2>
          <p>
            At <strong>JEE Origin</strong>, we decided to change the definition of waste. We saw agricultural residue as the world’s most sustainable raw material. Instead of treating crop remains like a problem to be burned away, we began to see them as the raw fibre for a new kind of industry.
          </p>
          <p>
            We realised that if we could turn this biomass into <strong>high-quality paper pulp</strong>, we wouldn’t just be building a business—we would be <strong>saving our forests</strong>. We could prove that paper, packaging, and many fibre-based products don’t always need to come from trees.
          </p>
          <blockquote>
            <p>If a tree took years to grow, why should we cut it down when a crop grows back every season and leaves so much useful residue behind?</p>
          </blockquote>
          <p>
            That belief is the soul of JEE Origin: turning <strong>agricultural waste to paper pulp</strong> and <strong>eco-friendly products</strong>, so that not a single extra tree needs to be cut for a piece of paper.
          </p>

          <h2>Building the Dream: JEE Origin Pvt Ltd</h2>
          <p>
            Transitioning from a dreamer to a founder was the hardest thing I’ve ever done. <strong>JEE Origin Pvt Ltd</strong> was built on grit, late nights, and the blessings of the farming community.
          </p>
          <p>
            We didn’t want to build just another factory. We wanted to build a <strong>bio-refinery that respects the earth</strong>. A bio-refinery is like an oil refinery—but instead of crude oil, we use biomass such as crop residue, <strong>sugarcane bagasse</strong>, and <strong>wheat straw</strong>. We convert this into high-value paper pulp and related eco-friendly products.
          </p>
          <p>Our manufacturing model is simple yet revolutionary:</p>
          <ul>
              <li><strong>We go to the farmer.</strong> We pick up the waste they were going to burn.</li>
              <li><strong>We process this agricultural waste</strong> into premium pulp that can be used for everything from packaging to textiles. JEE Origin positions itself as a <strong>sustainable pulp manufacturer in India</strong> that is rooted in the village, but ready for global supply chains.</li>
              <li><strong>We generate energy from within.</strong> We don’t rely blindly on fuels that harm the planet. Instead, we take the liquids and residues from the agri-waste itself and convert them into energy to run our machines as much as possible.</li>
              <li><strong>We return to the soil.</strong> Whatever is left goes back to the farmer as organic fertiliser, enriching the land that fed us.</li>
          </ul>
          <p>
            This is the <strong>circular economy in action</strong>. It is a loop where nothing is wasted, and everyone wins.
          </p>

          <h2>Circular Economy in Action: Waste to Wealth, Farm to Industry</h2>
          <p>
            Our work at JEE Origin is not just about technology; it is about building a <strong>bridge between farms and industry</strong>.
          </p>
          <p>
            On one side, we have <em>kisans</em> (farmers) who struggle with crop residue and often see no option beyond burning. On the other side, we have <strong>brands, paper mills, and packaging buyers</strong> looking for reliable, sustainable raw materials.
          </p>
          <p>JEE Origin stands in the middle as:</p>
          <ul>
            <li>A <strong>partner to farmers</strong>, offering them <strong>farmer income from crop residue</strong> that was once considered useless.</li>
            <li>A <strong>solution provider to industry</strong>, delivering <strong>agri-waste-based pulp</strong> and <strong>eco-friendly packaging from agri-waste</strong> that helps companies meet their sustainability goals.</li>
          </ul>
          <p>
            One small but powerful example: in a village I visited in North India, farmers used to burn their wheat straw every year just to prepare for the next sowing. Today, a group of those farmers bundles that same straw and sells it to us. Their fields are clearer, their air is cleaner, and that “kachra” now adds a few thousand rupees more to their seasonal income.
          </p>
          <p>
            In another cluster, a sugarcane-growing community now sees its bagasse not just as a by-product of the mill, but as a feedstock for <strong>sugarcane bagasse pulp</strong> that can travel into global packaging and paper products. For them, waste is no longer a shame—it is a symbol of progress.
          </p>

          <h3>Environmental Impact: From Smoke-Filled Skies to Clear Horizons</h3>
          <p>
            The impact of this model is not theoretical; it is visible in the air we breathe and in the forests we save.
          </p>
          <p>By turning <strong>agricultural waste to paper pulp</strong>, we are working towards:</p>
          <ul>
            <li><strong>Reduced stubble burning and smoke</strong>, leading to cleaner skies and fewer respiratory problems in both rural and nearby urban areas.</li>
            <li><strong>Cleaner air in rural villages</strong>, giving children a chance to grow up without seasonal smoke clouds.</li>
            <li><strong>Lower pressure on forests</strong>, because paper, pulp, and eco-friendly packaging can be made from agri-waste instead of cutting down trees.</li>
          </ul>
          <p>
            When we say <strong>&ldquo;Serve the Nature — Save Tree, Save Planet.&rdquo;</strong>, we mean it in very practical terms. Every ton of agri-waste pulp we produce is one step away from deforestation and one step closer to a <strong>smoke-free rural India</strong>.
          </p>

          <h2>A Vision for the New India: 2040</h2>
          <p>
            My vision for the year <strong>2040</strong> is clear: a <strong>“Smoke-Free India”</strong>.
          <p>
            We are on a mission to <strong>process 1 crore tons of agricultural waste every year</strong>. For me, this isn&apos;t about turnover or valuation.
          </p>
          </p>
          <p>We are on a mission to <strong>process 1 crore tons of agricultural waste every year</strong>. For me, this isn't about turnover or valuation.</p>
          <p>It’s about:</p>
          <ul>
            <li>The number of trees we saved.</li>
            <li>The number of farmers who could finally afford to send their children to better schools because their <em>“waste”</em> became a source of income.</li>
            <li>The number of villages that can breathe easier because the fire in their fields has been replaced by opportunity in their hands.</li>
          </ul>

          <h2>The Message to the Youth</h2>
          <p>
            To every young Indian who feels they are too small to make a change: <strong>look at the waste around you</strong>. The biggest problems of our country are actually our biggest opportunities.
          </p>
          <p>
            You don&apos;t need a fancy office or a foreign degree to be a hero. You just need the courage to look at a problem and say, <em>&ldquo;I will solve this.&rdquo;</em>
          </p>
          <p>
            I am not just a founder; I am a son of the soil who refused to let his roots be burnt. At JEE Origin, we are proving that the future of India isn&apos;t in the hands of those who exploit nature, but in the hands of those who heal it.
          </p>
          <p>
            If I, as a farmer’s son, can build a <strong>bio-refinery model</strong> around crop residue, you too can build something powerful around the challenges you see. The path is not easy, but the soil of this country is fertile—not just for crops, but for ideas.
          </p>

          <h2>Conclusion: The Legacy of the Soil</h2>
          <p>
            The journey of <strong>JEE Origin Pvt Ltd</strong> is just beginning. Every time a roll of paper is made from our agricultural pulp, it is a victory for the environment. Every time a farmer gets paid for his crop residue, it is a victory for India.
          </p>
          <p>
            We are committed to <strong>zero-waste manufacturing in India</strong>, to honouring the land that feeds us, and to ensuring that our children inherit cleaner air, stronger forests, and more dignified villages.
          </p>
          <p>
            I invite you to be a part of this journey—not as distant observers, but as <strong>partners in a revolution</strong>:
          </p>
          <ul>
            <li>If you are a <strong>farmer</strong>, collaborate with us. Let us find ways for you to <strong>sell your residue instead of burning it</strong>.</li>
            <li>If you are a <strong>business or brand</strong>, source your <strong>sustainable pulp and eco-friendly packaging from agri-waste</strong> through partners like JEE Origin. Together, we can prove that Indian industry can be both competitive and climate-responsible.</li>
            <li>If you are a <strong>young Indian, policymaker, or impact investor</strong>, join us in building the ecosystem that can deliver a truly <strong>smoke-free India by 2040</strong>.</li>
          </ul>
          <p>
            Let’s stop burning our future. Let’s start building it—<strong>one field, one stem, and one dream at a time</strong>.
          </p>
          <blockquote className="text-center">
            <p><em>“The waste of today is the wealth of tomorrow. Let us grow together.”</em><br/>— <strong>Gopal Jee</strong></p>
          </blockquote>
        </div>
      </article>
    </div>
  );
}
