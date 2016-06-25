#version 140

out vec4 outColor;

in vec2 outVecTexCoord;
in vec2 outVecLightmapCoord;

uniform sampler2D tex;
uniform sampler2D lightmap;

void main()
{
	vec4 texColor = texture( tex, outVecTexCoord );
	
	if( texColor.a > 0.5 )
	{
		outColor = texColor * texture( lightmap, outVecLightmapCoord );
	}
	else
	{
		discard;
	}
}