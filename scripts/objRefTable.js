const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.TiledBg.Exps.ImageOffsetX,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Bg: 0},
	{Solid: 0},
	{Piso: 0},
	{Parede: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{Player: 0},
	{Controles: 0},
	{Text: 0},
	{Text2: 0},
	{Menu: 0},
	{Audio: 0},
	{Sensor: 0},
	{Pontuação: 0}
];

self.InstanceType = {
	Bg: class extends self.ITiledBackgroundInstance {},
	Piso: class extends self.ITiledBackgroundInstance {},
	Parede: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	Controles: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Menu: class extends self.ITiledBackgroundInstance {},
	Audio: class extends self.IInstance {},
	Sensor: class extends self.ISpriteInstance {},
	Pontuação: class extends self.ITextInstance {}
}