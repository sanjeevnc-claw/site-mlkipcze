export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D. Padma - Personal Website</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .header {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        .header h1 {
            color: #2c3e50;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .header .subtitle {
            color: #7f8c8d;
            font-size: 1.2em;
            font-style: italic;
        }
        
        .content {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section h2 {
            color: #34495e;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 1.5em;
        }
        
        .info-card {
            background: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            border-left: 4px solid #3498db;
        }
        
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #ffeaa7;
            margin: 15px 0;
        }
        
        .family-section {
            background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
            padding: 25px;
            border-radius: 12px;
            color: #2c3e50;
        }
        
        @media (max-width: 600px) {
            .header h1 {
                font-size: 2em;
            }
            .container {
                padding: 20px 10px;
            }
            .header, .content {
                padding: 25px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>D. Padma</h1>
            <p class="subtitle">Retired Superintendent | Devoted Family Woman</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>About Me</h2>
                <div class="info-card">
                    <p><strong>Age:</strong> 67 years young</p>
                    <p><strong>Current Status:</strong> Happily retired and enjoying life</p>
                </div>
            </div>
            
            <div class="section">
                <h2>Professional Journey</h2>
                <div class="highlight">
                    <h3>🎓 Chellammal Women's College</h3>
                    <p><strong>Position:</strong> Superintendent</p>
                    <p><strong>Years of Service:</strong> 41 dedicated years</p>
                    <p>Four decades of commitment to education and women's empowerment, shaping countless lives and contributing to academic excellence.</p>
                </div>
            </div>
            
            <div class="section">
                <h2>Life After Retirement</h2>
                <div class="family-section">
                    <h3>💖 Family & Joy</h3>
                    <p>Now in the golden phase of life, I treasure every moment spent with my beloved family and precious grandchildren. These are the most rewarding years, filled with love, laughter, and the joy of watching the next generation grow.</p>
                    
                    <div style="margin-top: 15px; text-align: center;">
                        <em>"The best is yet to come - surrounded by family, filled with memories, and blessed with time to enjoy life's simple pleasures."</em>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <div class="info-card">
                    <p style="text-align: center; font-style: italic; color: #7f8c8d;">
                        "A life well-lived is measured not just by professional achievements, but by the love shared with family and the legacy left behind."
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>` }} />
  );
}